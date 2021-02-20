/*
 * @name:
 * @Date: 2020-12-24 12:03:47
 * @LastEditTime: 2021-02-20 13:05:55
 * @FilePath: \ai_cloud\src\api\login.js
 * @permission:
 */
import request from "@/request/request";

export function login(data) {
  return request({
    url: "auth/login",
    method: "post",
    data
  });
}

export function getUserInfo() {
  return request({
    url: "auth/info",
    method: "get"
  });
}
