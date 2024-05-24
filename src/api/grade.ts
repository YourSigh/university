import http from "@/util/http";

// 获取学生的课程信息
export function getStudentClass(params: any) {
    return http.get("/serve/university/getStudentClass", params);
}

// 添加成绩
export function setGrade(params: any) {
    return http.post("/serve/university/setGrade", params);
}

// 查询成绩
export function getGrade(params: any) {
    return http.get("/serve/university/getGrade", params);
}