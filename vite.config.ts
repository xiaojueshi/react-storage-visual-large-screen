import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import px2rem from 'postcss-plugin-px2rem';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        px2rem({
          rootValue: 192, // 设计稿宽度的 1/10
          unitPrecision: 5, // 小数位数
          propList: ['*'], // 需要转换的属性，* 表示所有
          selectorBlackList: [], // 不进行转换的选择器
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
        })
      ]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  }
})
