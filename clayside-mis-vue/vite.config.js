import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig ({
  plugins: [vue()],
  server: {
    open: '/',
  },
  alias: [
    { find: '@', replacement: resolve(__dirname, 'src') },
    { find: '@com', replacement: resolve(__dirname, 'src/components') },
    { find: '@lib', replacement: resolve(__dirname, 'src/libs') },
  ]
})
