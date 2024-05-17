import http from "@/util/http";

export function getClass(params: any) {
  return http.get("/serve/university/getClass", params);
};

export function getAllClass(params: any) {
  return http.get("/serve/university/getAllClass", params);
}

export function addClass(params: any) {
  return http.post("/serve/university/addClass", params);
};

