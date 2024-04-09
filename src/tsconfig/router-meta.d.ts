declare module 'vue-router' {
    interface RouteMeta {
        title?: string
    }
    interface RouteLocationNormalized {
        // 添加自定义属性或方法
        title?: string;
        matched?: RouteRecordNormalized[];
        fullPath?: string;
        query?: RouteQueryRaw;
        hash?: string;
        path?: string;
        redirectedFrom?: string;
        params?: RouteParams;
        meta?: RouteMeta;
    }
}

export { }
