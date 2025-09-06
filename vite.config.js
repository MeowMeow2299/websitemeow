// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/websitemeow/', // Thay 'websitemeow' bằng tên repo của bạn
})


