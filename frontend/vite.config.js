import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Add this line
  build: {
    outDir: 'dist', // this is the default, you can omit it if not customized
  },
})
