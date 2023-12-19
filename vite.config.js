import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    proxy: {
      '/api': {
        target: 'https://estate-backend.vercel.app',
        secure: false,
        changeOrigin: true,
      },
    },
  },

  plugins: [react()],
})
