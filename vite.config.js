import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: true
  },
  hmr: {
    host: "10.143.81.99",
    port: 5173

  }
})
