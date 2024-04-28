import http from "@/util/http";

// 获取用户权限
export function getUserAuthority(params: any) {
  return http.get("/serve/university/getAuthority", params);
}

// 修改用户权限
export function setUserAuthority(params: any) {
    return http.post("/serve/university/setAuthority", params);
}
