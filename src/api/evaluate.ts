import http from "@/util/http";

// 获取教师课程信息
export function getTeacherClass(params: any) {
    return http.get("/serve/university/getTeacherClass", params);
}

// 添加教学评价
export function setEvaluate(params: any) {
    return http.post("/serve/university/setEvaluate", params);
}