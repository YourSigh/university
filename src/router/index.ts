import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore, useAuthorityStore } from '../store'
import routes from './routes'

// 创建路由实例
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

// 导航守卫
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('loginToken');
  const authorityStore = useAuthorityStore();

  try {
    if (to.matched.length === 0) {
      next({ path: '/error' });
    } else if (to.path === '/sign') {
      if (token) {
        next({ path: '/' });
      } else {
        next();
      }
    } else {
      if (token) {
        if (to.path === '/dashboard' || to.path === '/setting' || to.path === '/error' || to.path === '/noAccess') {
          next();
          return;
        }
        if (authorityStore.authority.length === 0) {
          await authorityStore.getAuthorityList();
        }
        // 检查权限
        const hasAuthority = authorityStore.authority.some((item) => item.index === to.path && item.show);
        if (hasAuthority) {
          next();
        } else {
          next({ path: '/noAccess' });
        }
      } else {
        next({ path: '/sign' });
      }
    }
  } catch (error) {
    console.error('Error during navigation:', error);
    next({ path: '/error' });
  }
})

export default router;