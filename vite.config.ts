import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AdTracker',
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => {
        if (format === 'es') return 'index.mjs'
        if (format === 'cjs') return 'index.js'
        return 'index.global.js'
      },
    },
    rollupOptions: {
      output: { exports: 'named' },
    },
    minify: 'esbuild',
    sourcemap: true,
  },
})
