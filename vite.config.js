import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/OT9/' : '/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
