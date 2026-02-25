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

const props = withDefaults(defineProps<{
  model: string
  color?: string
  wireframe?: boolean
  autoRotateSpeed?: number
}>(), {
  color: '#a6e3a1',
  wireframe: false,
  autoRotateSpeed: 0.8,
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
  camera.position.set(0, 1.2, 3.5)
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

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404050, 0.8)
  scene.add(ambientLight)

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.5)
  keyLight.position.set(3, 5, 4)
  keyLight.castShadow = true
  keyLight.shadow.mapSize.width = 1024
  keyLight.shadow.mapSize.height = 1024
  keyLight.shadow.camera.near = 0.5
  keyLight.shadow.camera.far = 20
  keyLight.shadow.camera.left = -3
  keyLight.shadow.camera.right = 3
  keyLight.shadow.camera.top = 3
  keyLight.shadow.camera.bottom = -3
  keyLight.shadow.radius = 12
  scene.add(keyLight)

  // Shadow-receiving ground plane
  const shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.ShadowMaterial({ opacity: 0.4 })
  )
  shadowPlane.rotation.x = -Math.PI / 2
  shadowPlane.position.y = -1.1
  shadowPlane.receiveShadow = true
  scene.add(shadowPlane)

  const fillLight = new THREE.DirectionalLight(0x8899aa, 0.6)
  fillLight.position.set(-3, 2, -2)
  scene.add(fillLight)

  // Accent rim light (green tint)
  const rimLight = new THREE.PointLight(new THREE.Color(props.color).getHex(), 2, 10)
  rimLight.position.set(-2, 0, -3)
  scene.add(rimLight)

  // Ground glow
  const groundGlow = new THREE.PointLight(new THREE.Color(props.color).getHex(), 0.4, 8)
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
  let modelMesh: THREE.Mesh | null = null

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

      // Main material
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(props.color),
        metalness: 0.3,
        roughness: 0.4,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
        envMapIntensity: 0.5,
        transparent: true,
        opacity: 0,
      })

      modelMesh = new THREE.Mesh(geometry, material)
      modelMesh.castShadow = true
      scene.add(modelMesh)

      // Wireframe overlay
      if (props.wireframe) {
        const wireMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(props.color),
          wireframe: true,
          transparent: true,
          opacity: 0.08,
        })
        const wireMesh = new THREE.Mesh(geometry.clone(), wireMaterial)
        modelMesh.add(wireMesh)
      }

      // Fade in animation
      loading.value = false
      const fadeIn = () => {
        if (!material.opacity || material.opacity >= 1) return
        material.opacity = Math.min(material.opacity + 0.02, 1)
        if (material.opacity < 1) requestAnimationFrame(fadeIn)
      }
      // Small delay then fade
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

    // Rotate model
    if (modelMesh) {
      modelMesh.rotation.y = elapsed * props.autoRotateSpeed
      // Gentle bob
      modelMesh.position.y = Math.sin(elapsed * 0.5) * 0.05
    }

    // Animate particles
    const posAttr = particleGeometry.getAttribute('position') as THREE.BufferAttribute
    for (let i = 0; i < particleCount; i++) {
      posAttr.array[i * 3 + 1] += particleSpeeds[i] * 0.002
      if (posAttr.array[i * 3 + 1] > 2) {
        posAttr.array[i * 3 + 1] = -2
      }
    }
    posAttr.needsUpdate = true

    // Pulse rim light
    rimLight.intensity = 1.5 + Math.sin(elapsed * 2) * 0.5

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
