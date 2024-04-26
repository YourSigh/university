import http from "@/util/http";

// 获取用户列表
export function getUser(params: any) {
  return http.get("/serve/getUser", params);
}

// 添加用户
export function setUser(params: any) {
  return http.post("/serve/setUser", params);
}

// 注册
export function register(params: any) {
  return http.post("/serve/register", params);
}

// 登录
export function login(params: any) {
  return http.post("/serve/login", params);
}

// 修改头像
export function headshot(params: any) {
  return http.post("/serve/headshot", params);
}

// 修改密码
export function changePassword(params: any) {
  return http.post("/serve/changePassword", params);
}

// 修改用户名
export function changeUsername(params: any) {
  return http.post("/serve/changeUsername", params);
}

// 获取用户权限
export function getUserAuthority(params: any) {
  return http.get("/serve/getUserAuthority", params);
}
