import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  server: {
    host: true
  },
  base: command === 'build' ? '/Ecommerce-Academy-Assignment/' : '/'
}))