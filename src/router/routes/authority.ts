interface RouteConfig {
    path: string;
    name: string;
    component: any;
    meta: {
        title: string;
    };
}

const authority: RouteConfig[] = [
    {
        path: '/authorityManage',
        name: 'authority',
        component: () => import('@/views/authority/index.vue'),
        meta: {
            title: '权限管理'
        }
    }
];

export default authority;
