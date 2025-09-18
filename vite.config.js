import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Política A: deploy en repo 'ageelelectrical'
  base: '/ageelelectrical/'
})
