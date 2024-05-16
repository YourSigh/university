import http from "@/util/http";

export function addClass(params: any) {
  return http.post("/serve/university/addClass", params);
};

