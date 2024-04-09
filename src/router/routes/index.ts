import authority from './authority';
import error from './error';
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
    component: () => import('@/views/Home.vue'),
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
];

routes.push(...error);
routes.push(...sign);
routes.push(...test);
routes[1].children?.push(...authority);

export default routes;
