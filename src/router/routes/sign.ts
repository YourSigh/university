interface RouteConfig {
    path: string;
    name: string;
    component: any;
}

const login: RouteConfig[] = [
    {
        path: '/sign',
        name: 'sign',
        component: () => import('@/views/sign/index.vue')
    }
];

export default login;
