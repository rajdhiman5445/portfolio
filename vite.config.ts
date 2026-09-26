import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Vite configuration — https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true, // Listen on all network interfaces (LAN) for testing on mobile/other devices
    port: parseInt(process.env.PORT || '5173'),
  },
  preview: {
    host: true,
    port: parseInt(process.env.PORT || '4173'),
  },
})
