import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// 创建路由实例
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  if (true || to.path === '/login') {
    next()
  } else {
    next('/login');
  }
})

export default router