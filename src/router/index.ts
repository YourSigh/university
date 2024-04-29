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
        // if (authorityStore.authorityList.length === 0) {
        //   // await authorityStore.getAuthorityList();
        //   console.log(authorityStore.authorityList);
        // }
        next();
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