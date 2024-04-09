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
        path: '/gradeManage',
        name: 'GradeManage',
        component: () => import('@/views/grade/index.vue'),
        meta: {
            title: '成绩管理'
        }
    },
    {
        path: '/scheduleManage',
        name: 'ScheduleManage',
        component: () => import('@/views/schedule/index.vue'),
        meta: {
            title: '课表管理'
        }
    },
    {
        path: '/classroomManage',
        name: 'ClassroomManage',
        component: () => import('@/views/classroom/index.vue'),
        meta: {
            title: '空教室预约'
        }
    },
    {
        path: '/evaluateManage',
        name: 'EvaluateManage',
        component: () => import('@/views/evaluate/index.vue'),
        meta: {
            title: '评价教学'
        }
    },
    {
        path: '/courseManage',
        name: 'CourseManage',
        component: () => import('@/views/course/index.vue'),
        meta: {
            title: '课程管理'
        }
    },
    {
        path: '/waterElectricityManage',
        name: 'WaterElectricityManage',
        component: () => import('@/views/waterElectricity/index.vue'),
        meta: {
            title: '水电查询'
        }
    },
    {
        path: '/expressManage',
        name: 'ExpressManage',
        component: () => import('@/views/express/index.vue'),
        meta: {
            title: '快递查询'
        }
    },
    // 失物招领
    {
        path: '/lostFoundManage',
        name: 'LostFoundManage',
        component: () => import('@/views/lostFound/index.vue'),
        meta: {
            title: '失物招领'
        }
    },
    // 权限管理
    {
        path: '/authorityManage',
        name: 'AuthorityManage',
        component: () => import('@/views/authority/index.vue'),
        meta: {
            title: '权限管理'
        }
    },
    // 账号管理
    {
        path: '/accountManage',
        name: 'AccountManage',
        component: () => import('@/views/account/index.vue'),
        meta: {
            title: '账号管理'
        }
    },
];

export default authority;
