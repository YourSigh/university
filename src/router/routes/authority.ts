interface RouteConfig {
    path: string;
    name: string;
    component: any;
}

const authority: RouteConfig[] = [
    {
        path: '/authorityManage',
        name: 'authority',
        component: () => import('@/views/authority/index.vue')
    }
];

export default authority;
