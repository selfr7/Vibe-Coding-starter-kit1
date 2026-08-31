import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 配置。新手一般不需要动这个文件，交给 AI 处理即可。
// base: './' 让打包出来的 dist 文件夹可以双击 index.html 直接打开（不依赖服务器）。
export default defineConfig({
  base: './',
  plugins: [react()],
})