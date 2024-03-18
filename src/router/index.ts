import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// 创建路由实例
const router = createRouter({
  history: createWebHistory('/university'),
  routes
})

export default router