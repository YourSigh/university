import http from "@/util/http";

// 获取水电费信息
export function getWaterElectricity(params: any) {
  return http.get("/serve/university/getWaterElectricity", params);
}
