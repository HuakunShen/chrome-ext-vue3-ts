import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist/ui');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  root,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir,
    rollupOptions: {
      input: {
        popup: resolve(root, 'pages/popup/index.html'),
        options: resolve(root, 'pages/options/index.html')
      }
    }
  }
})
