import sign from './sign';
import test from './test';

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue')
  }
];

routes.push(...sign);
routes.push(...test);

export default routes;
