import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Admin runs on 3001 locally (client uses 3000, backend 3030).
  server: {
    port: 3001,
    strictPort: true,
  },
  preview: {
    port: 3001,
  },
})
