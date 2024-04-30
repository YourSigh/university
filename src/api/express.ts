import http from "@/util/http";

// 获取快递信息
export function getExpress(params: any) {
  return http.get("/serve/university/getExpress", params);
}
