import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const allowedHosts = (env.VITE_ALLOWED_HOSTS || '')
    .split(',')
    .map((host: string) => host.trim())
    .filter(Boolean)

  return {
    base: process.env.GITHUB_ACTIONS ? '/slides/' : '/',
    plugins: [
      {
        name: 'slidev-hmr-fix',
        apply: 'serve',
        transform(code, id) {
          // Inject a custom HMR handler into the #slidev/slides virtual module.
          // This handler clears componentsCache and rebuilds defineAsyncComponent
          // wrappers so slide content updates apply without a full page reload.
          if (id !== '/@slidev/slides') return
          // 1. Add version counter for cache-busting slide imports
          let patched = `let __hmrV = 0\n` + code
          // 2. Patch load functions: import('/@slidev/slides/N/md') → import(...+'?v='+__hmrV)
          patched = patched.replace(
            /await import\('(\/@slidev\/slides\/\d+\/md)'\)/g,
            (_, path) => `await import('${path}' + (__hmrV ? '?v=' + __hmrV : ''))`
          )
          // 3. Inject HMR handler that bumps version, clears cache, rebuilds routes
          patched = patched.replace(
            'import.meta.hot.accept()',
            [
              `import.meta.hot.on('slidev:refresh-components', () => {`,
              `  __hmrV++`,
              `  componentsCache.length = 0`,
              `  const routes = import.meta.hot.data.slides.value`,
              `  import.meta.hot.data.slides.value = routes.map((route, idx) => ({`,
              `    ...route,`,
              `    component: getAsyncComponent(idx, route.load)`,
              `  }))`,
              `})`,
              `import.meta.hot.accept()`,
            ].join('\n')
          )
          return patched
        },
        handleHotUpdate({ file, server }) {
          if (file.endsWith('slides.md')) {
            // After Slidev processes the update (invalidates modules, sends
            // slidev:update-slide), tell the client to clear its component
            // cache and rebuild async wrappers so the fresh modules are used.
            setTimeout(() => {
              server.hot.send('slidev:refresh-components', {})
            }, 150)
          }
        }
      }
    ],
    server: {
      host: '0.0.0.0',
      port: 3030,
      strictPort: true,
      allowedHosts
    }
  }
})
