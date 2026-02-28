<template>
  <div class="absolute inset-0 stl-bg">
    <!-- Grid pattern (matches landing page) — behind the canvas -->
    <div class="absolute inset-0 pointer-events-none stl-grid" />

    <!-- WebGL canvas (above grid) -->
    <canvas ref="canvas" class="absolute inset-0 w-full h-full z-[1]" />

    <!-- Vignette -->
    <div class="absolute inset-0 pointer-events-none stl-vignette z-[2]" />

    <!-- Loading state -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center z-[3]">
      <div class="loading-spinner" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { STLLoader } from 'three/addons/loaders/STLLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const props = withDefaults(defineProps<{
  model: string
  color?: string
  wireframe?: boolean
  autoRotateSpeed?: number
  overlayModel?: string
  overlayColor?: string
}>(), {
  color: '#a6e3a1',
  wireframe: false,
  autoRotateSpeed: 2.5,
  overlayColor: '#fab387',
})

const canvas = ref<HTMLCanvasElement | null>(null)
const loading = ref(true)

let renderer: THREE.WebGLRenderer | null = null
let animationId: number | null = null
let resizeObserver: ResizeObserver | null = null
let initialized = false

function initScene(el: HTMLCanvasElement) {
  if (initialized) return
  initialized = true

  const scene = new THREE.Scene()

  // Camera
  const camera = new THREE.PerspectiveCamera(40, el.clientWidth / el.clientHeight, 0.1, 1000)
  camera.position.set(0, 1.2, -3.5)
  camera.lookAt(0, 0, 0)

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: el,
    antialias: true,
    alpha: true,
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(el.clientWidth, el.clientHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.2
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  // Orbit controls — auto-rotates, pauses on drag, resumes after 3s idle
  const controls = new OrbitControls(camera, el)
  controls.enableDamping = true
  controls.dampingFactor = 0.1
  controls.enableZoom = true
  controls.enablePan = false
  controls.autoRotate = true
  controls.autoRotateSpeed = props.autoRotateSpeed * 2 // OrbitControls uses half-speed units

  let resumeTimer: ReturnType<typeof setTimeout> | null = null
  const pauseAutoRotate = () => {
    controls.autoRotate = false
    if (resumeTimer) clearTimeout(resumeTimer)
    resumeTimer = setTimeout(() => { controls.autoRotate = true }, 3000)
  }
  el.addEventListener('pointerdown', pauseAutoRotate)
  el.addEventListener('wheel', pauseAutoRotate)

  // Lights — three-point studio setup
  const ambientLight = new THREE.AmbientLight(0x606070, 0.5)
  scene.add(ambientLight)

  // Hemisphere light for soft sky/ground fill
  const hemiLight = new THREE.HemisphereLight(0xb0c4de, 0x2a2a35, 0.6)
  scene.add(hemiLight)

  // Key light — warm, from upper-right
  const keyLight = new THREE.DirectionalLight(0xfff5e6, 1.8)
  keyLight.position.set(4, 6, 3)
  keyLight.castShadow = true
  keyLight.shadow.mapSize.width = 2048
  keyLight.shadow.mapSize.height = 2048
  keyLight.shadow.camera.near = 0.5
  keyLight.shadow.camera.far = 20
  keyLight.shadow.camera.left = -4
  keyLight.shadow.camera.right = 4
  keyLight.shadow.camera.top = 4
  keyLight.shadow.camera.bottom = -4
  keyLight.shadow.radius = 8
  keyLight.shadow.bias = -0.0005
  scene.add(keyLight)

  // Shadow-receiving ground plane
  const shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.ShadowMaterial({ opacity: 0.35 })
  )
  shadowPlane.rotation.x = -Math.PI / 2
  shadowPlane.position.y = -1.1
  shadowPlane.receiveShadow = true
  scene.add(shadowPlane)

  // Fill light — cool, from left
  const fillLight = new THREE.DirectionalLight(0x8ab4f8, 0.5)
  fillLight.position.set(-4, 3, -1)
  scene.add(fillLight)

  // Back/rim light — highlights edges from behind
  const rimLight = new THREE.DirectionalLight(0xffffff, 1.0)
  rimLight.position.set(0, 2, -5)
  scene.add(rimLight)

  // Accent glow from below (green tint to match theme)
  const groundGlow = new THREE.PointLight(new THREE.Color(props.color).getHex(), 0.3, 8)
  groundGlow.position.set(0, -2, 0)
  scene.add(groundGlow)

  // Floating particles
  const particleCount = 80
  const particleGeometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const particleSpeeds = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6
    particleSpeeds[i] = 0.2 + Math.random() * 0.5
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const particleMaterial = new THREE.PointsMaterial({
    color: new THREE.Color(props.color),
    size: 0.015,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  const particles = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particles)

  // Load STL
  const loader = new STLLoader()
  const modelGroup = new THREE.Group()
  modelGroup.rotation.x = -0.35
  scene.add(modelGroup)

  loader.load(
    props.model,
    (geometry) => {
      geometry.computeVertexNormals()

      // Center and scale
      geometry.computeBoundingBox()
      const box = geometry.boundingBox!
      const center = new THREE.Vector3()
      box.getCenter(center)
      geometry.translate(-center.x, -center.y, -center.z)

      const size = new THREE.Vector3()
      box.getSize(size)
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2.0 / maxDim
      geometry.scale(scale, scale, scale)

      // ── Connected-component flood fill to find disconnected mesh islands ──
      const pos = geometry.attributes.position.array as Float32Array
      const faceCount = pos.length / 9

      // Build adjacency: two faces are neighbours if they share an edge (2 vertices)
      const Q = 1e-5
      const vertKey = (i: number) =>
        `${Math.round(pos[i] / Q)},${Math.round(pos[i + 1] / Q)},${Math.round(pos[i + 2] / Q)}`

      // Map each edge (pair of quantized vertex keys, sorted) → list of face indices
      const edgeToFaces = new Map<string, number[]>()
      for (let f = 0; f < faceCount; f++) {
        const base = f * 9
        const vk = [vertKey(base), vertKey(base + 3), vertKey(base + 6)]
        for (let a = 0; a < 3; a++) {
          for (let b = a + 1; b < 3; b++) {
            const ek = vk[a] < vk[b] ? `${vk[a]}|${vk[b]}` : `${vk[b]}|${vk[a]}`
            let list = edgeToFaces.get(ek)
            if (!list) { list = []; edgeToFaces.set(ek, list) }
            list.push(f)
          }
        }
      }

      // Build face adjacency list
      const adj: number[][] = Array.from({ length: faceCount }, () => [])
      for (const faces of edgeToFaces.values()) {
        for (let i = 0; i < faces.length; i++) {
          for (let j = i + 1; j < faces.length; j++) {
            adj[faces[i]].push(faces[j])
            adj[faces[j]].push(faces[i])
          }
        }
      }

      // BFS flood fill
      const regionOf = new Int32Array(faceCount).fill(-1)
      let regionCount = 0
      for (let f = 0; f < faceCount; f++) {
        if (regionOf[f] !== -1) continue
        const rid = regionCount++
        const queue = [f]
        regionOf[f] = rid
        while (queue.length > 0) {
          const cur = queue.pop()!
          for (const nb of adj[cur]) {
            if (regionOf[nb] === -1) {
              regionOf[nb] = rid
              queue.push(nb)
            }
          }
        }
      }

      // Log each region with face count and bounding box (in original pre-scale units)
      const palette = [
        '#e06c75', '#e5c07b', '#98c379', '#56b6c2', '#61afef', '#c678dd',
        '#d19a66', '#be5046', '#7ec8e3', '#f4a261', '#2a9d8f', '#e76f51',
        '#a78bfa', '#fb923c', '#4ade80', '#f472b6', '#38bdf8', '#facc15',
      ]

      console.log(`%c═══ STL Region Map (${regionCount} regions, ${faceCount} faces) ═══`, 'font-weight:bold;font-size:14px')
      const regionFaces: number[][] = Array.from({ length: regionCount }, () => [])
      for (let f = 0; f < faceCount; f++) regionFaces[regionOf[f]].push(f)

      // Sort regions by size descending for easier reading
      const regionOrder = Array.from({ length: regionCount }, (_, i) => i)
        .sort((a, b) => regionFaces[b].length - regionFaces[a].length)

      for (const rid of regionOrder) {
        const faces = regionFaces[rid]
        let minX = Infinity, minY = Infinity, minZ = Infinity
        let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity
        for (const f of faces) {
          for (let v = 0; v < 3; v++) {
            const i = f * 9 + v * 3
            minX = Math.min(minX, pos[i]); maxX = Math.max(maxX, pos[i])
            minY = Math.min(minY, pos[i + 1]); maxY = Math.max(maxY, pos[i + 1])
            minZ = Math.min(minZ, pos[i + 2]); maxZ = Math.max(maxZ, pos[i + 2])
          }
        }
        const c = palette[rid % palette.length]
        console.log(
          `%cRegion ${rid}%c  ${faces.length} faces  X[${minX.toFixed(3)},${maxX.toFixed(3)}] Y[${minY.toFixed(3)},${maxY.toFixed(3)}] Z[${minZ.toFixed(3)},${maxZ.toFixed(3)}]`,
          `color:${c};font-weight:bold;font-size:12px`,
          'color:inherit;font-size:12px'
        )
      }

      // Apply vertex colors: ASA → green, TPU → orange
      const tpuRegions = new Set([0, 1, 2, 3, 4, 5])
      const asaColor = new THREE.Color(props.color)          // #a6e3a1 green
      const tpuColor = new THREE.Color(props.overlayColor)   // #fab387 orange
      const colors = new Float32Array(pos.length)
      for (let f = 0; f < faceCount; f++) {
        const c = tpuRegions.has(regionOf[f]) ? tpuColor : asaColor
        const base = f * 9
        for (let v = 0; v < 3; v++) {
          colors[base + v * 3] = c.r
          colors[base + v * 3 + 1] = c.g
          colors[base + v * 3 + 2] = c.b
        }
      }
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      // Material with vertex colors
      const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        vertexColors: true,
        metalness: 0.3,
        roughness: 0.4,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
        envMapIntensity: 0.5,
        transparent: true,
        opacity: 0,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.castShadow = true
      modelGroup.add(mesh)

      // Fade in
      loading.value = false
      const fadeIn = () => {
        if (material.opacity >= 1) return
        material.opacity = Math.min(material.opacity + 0.02, 1)
        if (material.opacity < 1) requestAnimationFrame(fadeIn)
      }
      setTimeout(() => {
        material.opacity = 0.01
        fadeIn()
      }, 200)
    },
    undefined,
    (err) => {
      console.error('STL load error:', err)
      loading.value = false
    }
  )

  // Animation loop
  const clock = new THREE.Clock()

  function animate() {
    animationId = requestAnimationFrame(animate)
    const elapsed = clock.getElapsedTime()

    controls.update()

    // Gentle bob
    modelGroup.position.y = Math.sin(elapsed * 0.5) * 0.05

    // Animate particles
    const posAttr = particleGeometry.getAttribute('position') as THREE.BufferAttribute
    for (let i = 0; i < particleCount; i++) {
      posAttr.array[i * 3 + 1] += particleSpeeds[i] * 0.002
      if (posAttr.array[i * 3 + 1] > 2) {
        posAttr.array[i * 3 + 1] = -2
      }
    }
    posAttr.needsUpdate = true

    renderer!.render(scene, camera)
  }

  animate()

  // Resize via observer
  resizeObserver = new ResizeObserver(() => {
    if (!canvas.value || !renderer) return
    const w = canvas.value.clientWidth
    const h = canvas.value.clientHeight
    if (w === 0 || h === 0) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  })
  resizeObserver.observe(el)
}

onMounted(() => {
  if (!canvas.value) return
  const el = canvas.value

  // Slidev may not have laid out the slide yet — wait for real dimensions
  if (el.clientWidth > 0 && el.clientHeight > 0) {
    initScene(el)
  } else {
    resizeObserver = new ResizeObserver(() => {
      if (el.clientWidth > 0 && el.clientHeight > 0) {
        resizeObserver?.disconnect()
        resizeObserver = null
        initScene(el)
      }
    })
    resizeObserver.observe(el)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  if (animationId !== null) cancelAnimationFrame(animationId)
  renderer?.dispose()
  renderer = null
})
</script>

<style scoped>
.stl-bg {
  background: linear-gradient(135deg, #0c0c0d 0%, #161618 40%, #111113 100%);
}

.stl-grid {
  background-image:
    linear-gradient(#cdddd2 1px, transparent 1px),
    linear-gradient(90deg, #cdddd2 1px, transparent 1px);
  background-size: 4rem 4rem;
  opacity: 0.06;
}

.stl-vignette {
  background: radial-gradient(ellipse at center, transparent 30%, rgba(12, 12, 13, 0.7) 100%);
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--witm-surface1);
  border-top-color: var(--witm-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
