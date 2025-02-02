import http from "@/util/http";

// 获取用户列表
export function getUser(params: any) {
  return http.get("/serve/university/getUser", params);
}

// 获取教师列表
export function getTeacher(params: any) {
  return http.get("/serve/university/getTeacher", params);
}

// 添加用户
export function setUser(params: any) {
  return http.post("/serve/university/setUser", params);
}

// 注册
export function register(params: any) {
  return http.post("/serve/university/register", params);
}

// 登录
export function login(params: any) {
  return http.post("/serve/university/login", params);
}

// 修改头像
export function headshot(params: any) {
  return http.post("/serve/university/headshot", params);
}

// 修改密码
export function changePassword(params: any) {
  return http.post("/serve/university/changePassword", params);
}

// 修改用户名
export function changeUsername(params: any) {
  return http.post("/serve/university/changeUsername", params);
}

// 删除用户
export function deleteUser(params: any) {
  return http.post("/serve/university/deleteUser", params);
}

// 修改用户信息
export function changeUserInfo(params: any) {
  return http.post("/serve/university/changeUserInfo", params);
}
