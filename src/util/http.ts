import axios from "axios";
// 创建axios实例
const service = axios.create({
    // baseURL: '',
    timeout: 100000
});
// 请求拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});
// 响应拦截器
service.interceptors.response.use(response => {
    if (response.status !== 200) {
        return Promise.reject(response)
    } else {
        return response.data
    }
}, error => {
    return Promise.reject(error)
});

function get(url: string, params: any) {
    return service.get(url, {params});
}

function post(url: string, params: any) {
    return service.post(url, params);
}

const http = { get, post };

export default http;