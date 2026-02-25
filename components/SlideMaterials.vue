<template>
  <div class="slide-bg absolute inset-0 flex items-center justify-center px-8 py-6">
    <div class="w-full h-full flex flex-col">
      <div class="grid grid-cols-2 grid-rows-2 gap-3 flex-1 min-h-0">
        <div
          v-for="mat in materials"
          :key="mat.name"
          class="flex items-center gap-4 px-4 py-3"
        >
          <!-- Molecule diagram -->
          <div
            :ref="(el) => setContainerRef(mat.name, el as HTMLElement)"
            class="molecule-container shrink-0 flex items-center justify-center"
          />
          <!-- Text content -->
          <div class="flex flex-col min-w-0 flex-1">
            <p class="material-name text-3xl font-bold uppercase tracking-wider leading-none !mb-0 !pb-0">
              {{ mat.name }}
            </p>
            <p class="material-full-name text-sm !mt-0 mb-3">{{ mat.fullName }}</p>
            <div class="space-y-0.5 text-sm">
              <div v-for="prop in mat.props" :key="prop.label" class="flex justify-between gap-2">
                <span class="prop-label whitespace-nowrap">{{ prop.label }}</span>
                <span class="prop-value whitespace-nowrap">{{ prop.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SmilesDrawer from 'smiles-drawer'

interface MaterialProp {
  label: string
  value: string
}

interface Material {
  name: string
  fullName: string
  smiles: string
  props: MaterialProp[]
}

const materials: Material[] = [
  {
    name: 'PLA',
    fullName: 'Polylactic Acid',
    smiles: 'CC(O)C(=O)O',
    props: [
      { label: 'Print temp', value: '190-220 °C' },
      { label: 'UV resist.', value: 'Poor' },
      { label: 'Flexibility', value: 'Brittle' },
      { label: 'Best for', value: 'Indoor prototypes' },
    ],
  },
  {
    name: 'PETG',
    fullName: 'PET Glycol-modified',
    smiles: 'OC(=O)c1ccc(C(=O)O)cc1',
    props: [
      { label: 'Print temp', value: '220-250 °C' },
      { label: 'UV resist.', value: 'Moderate' },
      { label: 'Flexibility', value: 'Semi-flex' },
      { label: 'Best for', value: 'Functional parts' },
    ],
  },
  {
    name: 'ASA',
    fullName: 'Acrylonitrile Styrene Acrylate',
    smiles: 'C=Cc1ccccc1',
    props: [
      { label: 'Print temp', value: '240-260 °C' },
      { label: 'UV resist.', value: 'Excellent' },
      { label: 'Flexibility', value: 'Rigid' },
      { label: 'Best for', value: 'Outdoor wearables' },
    ],
  },
  {
    name: 'TPU',
    fullName: 'Thermoplastic Polyurethane',
    smiles: 'O=C=Nc1ccc(Cc2ccc(N=C=O)cc2)cc1',
    props: [
      { label: 'Print temp', value: '220-250 °C' },
      { label: 'UV resist.', value: 'Good' },
      { label: 'Flexibility', value: 'Very flexible' },
      { label: 'Best for', value: 'Wristbands & clips' },
    ],
  },
]

const containerRefs = ref<Record<string, HTMLElement | null>>({})

function setContainerRef(name: string, el: HTMLElement | null) {
  containerRefs.value[name] = el
}

onMounted(() => {
  const drawer = new SmilesDrawer.SmiDrawer({
    width: 160,
    height: 160,
    bondThickness: 1.5,
    bondLength: 25,
    fontSizeLarge: 11,
    fontSizeSmall: 3,
    padding: 30,
    compactDrawing: true,
    themes: {
      dark: {
        C: '#a6e3a1',
        O: '#ef9a9a',
        N: '#90caf9',
        S: '#fff59d',
        H: '#6c6e77',
        F: '#a6e3a1',
        CL: '#a6e3a1',
        BR: '#ef9a9a',
        I: '#ce93d8',
        BACKGROUND: 'transparent',
      },
    },
  })

  for (const mat of materials) {
    const container = containerRefs.value[mat.name]
    if (container) {
      drawer.draw(mat.smiles, 'svg', 'dark', (svg: SVGSVGElement) => {
        // Expand viewBox to prevent text label clipping
        const vb = svg.getAttribute('viewBox')
        if (vb) {
          const [x, y, w, h] = vb.split(' ').map(Number)
          const pad = 15
          svg.setAttribute('viewBox', `${x - pad} ${y - pad} ${w + pad * 2} ${h + pad * 2}`)
        }
        svg.setAttribute('width', '160')
        svg.setAttribute('height', '160')
        svg.style.borderRadius = '0.5rem'
        container.appendChild(svg)
      })
    }
  }
})
</script>

<style scoped>
.slide-bg {
  background-color: var(--witm-base);
}

.material-name {
  font-family: var(--witm-font-display);
}

.material-full-name {
  font-family: var(--witm-font-body);
}

.molecule-container {
  width: 160px;
  height: 160px;
  overflow: hidden;
}

.prop-label {
  font-family: var(--witm-font-body);
}

.prop-value {
  font-family: var(--witm-font-body);
  font-weight: 500;
}
</style>
