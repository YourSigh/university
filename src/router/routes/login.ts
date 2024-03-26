interface RouteConfig {
    path: string;
    name: string;
    component: any;
}

const login: RouteConfig[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    }
];

export default login;
