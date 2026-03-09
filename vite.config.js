import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  server: {
    host: true
  },
  base: command === 'build' ? '/Ecommerce-Academy-Assignment/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        productPage: 'pages/productPage.html',
        cartPage: 'pages/cartPage.html',
      }
    }
  }
}))