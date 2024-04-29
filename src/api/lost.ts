import http from "@/util/http";

// 获取丢失物品列表
export function getLost(params: any) {
  return http.get("/serve/university/getLost", params);
}

// 添加丢失物品
export function addLost(params: any) {
  return http.post("/serve/university/addLost", params);
}

// 删除丢失物品
export function deleteLost(params: any) {
  return http.post("/serve/university/deleteLost", params);
}
