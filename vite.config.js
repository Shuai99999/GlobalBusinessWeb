import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署配置
// 如果仓库名是 username/GlobalBusinessWeb，base 应该是 /GlobalBusinessWeb/
// 本地开发时 base 为 '/'
const getBasePath = () => {
  // 从环境变量获取仓库名
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    return `/${repoName}/`
  }
  // 本地开发
  return '/'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
})

