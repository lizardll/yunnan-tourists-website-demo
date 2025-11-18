import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/yunnan-tourists-website-demo/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
