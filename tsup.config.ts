import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    splitting: false
  },
  {
    entry: ['src/index.ts'],
    format: ['iife'],
    clean: false,
    minify: true,
    globalName: 'AdTracker',
    target: 'es2015'
  }
])