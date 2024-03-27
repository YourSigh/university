import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// 创建路由实例
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('loginToken');
  if (to.path === '/sign') {
    if (token) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    if (token) {
      next();
    } else {
      next({ path: '/sign' });
    }
  }
})

export default router