import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Devdarshan/', // 👈 replace repo-name with your GitHub repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
