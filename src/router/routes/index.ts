import login from './login';
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

routes.push(...login);
routes.push(...test);

export default routes;
