import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default {
  plugins: [
    vue(),
    Pages({
      extensions: ['vue'],
    }),
  ],
  base: './',
  resolve: {
    alias: {
      "img": path.resolve(__dirname, 'src/assets/img'),
      "@": path.resolve(__dirname, "src"),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/common/index.less";`
      }
    }
  },
  build: {
    assetsDir: 'static/img',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
}
