import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  resolve: {
    alias: [
      {
        find: 'react-router-dom',
        replacement: 'react-router-dom'
      }
    ]
  },
  optimizeDeps: {
    include: ['react-router-dom']
  }
})
