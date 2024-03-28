interface RouteConfig {
    path: string;
    name: string;
    component: any;
}

const error: RouteConfig[] = [
    {
        path: '/error',
        name: 'error',
        component: () => import('@/views/error/index.vue')
    }
];

export default error;
