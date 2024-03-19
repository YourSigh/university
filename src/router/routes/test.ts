interface RouteConfig {
    path: string;
    name: string;
    component: any;
}

const test: RouteConfig[] = [
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/test/index.vue')
    }
];

export default test;
