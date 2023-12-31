import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/start-markdown-convert",
  assetsInclude:[
      "**/*.md"
  ],
  build: {
    outDir: 'build', // Adjust this path to match your desired build directory,
  },
})
