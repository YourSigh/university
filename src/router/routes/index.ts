const routeFiles = import.meta.glob('./*.ts');

interface Route {
    path: string;
    name: string;
    component: any;
}

const routes: Route[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/HelloWorld.vue')
    }
];

(async () => {
  for (const path in routeFiles) {
    if (path === './index.ts') continue; // 忽略 index.ts 文件
    // 动态导入模块
    const module:any = await routeFiles[path]();

    const route = module.default;
    if (Array.isArray(route)) {
      routes.push(...route);
    } else {
      routes.push(route);
    }
  }
})();

export default routes;
