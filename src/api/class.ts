import http from "@/util/http";

// 根据班级或用户id获取课程信息
export function getClass(params: any) {
  return http.get("/serve/university/getClass", params);
}

// 获取所有的课程信息
export function getAllClass(params: any) {
  return http.get("/serve/university/getAllClass", params);
}

// 修改课程信息
export function changeClass(params: any) {
    return http.post("/serve/university/changeClass", params);
}

// 添加课程
export function addClass(params: any) {
  return http.post("/serve/university/addClass", params);
}
