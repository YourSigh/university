import authority from './authority';
import sign from './sign';
import test from './test';

const routes: any = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: '系统首页'
        },
        component: () => import("@/views/Dashboard.vue")
      },
    ]
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/Error.vue')
  },
  {
    path: '/noAccess',
    name: 'noAccess',
    component: () => import('@/views/NoAccess.vue')
  }
];

routes.push(...sign);
routes.push(...test);
routes[1].children?.push(...authority);

export default routes;
