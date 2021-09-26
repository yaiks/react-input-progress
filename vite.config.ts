const path = require('path')
import react from '@vitejs/plugin-react'
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/InputProgress.tsx'),
      name: 'react-input-progress',
      fileName: (format) => `react-input-progress.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()]
})
