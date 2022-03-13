/*
 * @name:
 * @Date: 2020-12-24 12:03:47
 * @LastEditTime: 2022-03-13 23:08:52
 * @FilePath: \vue3-element-admin\src\api\login.js
 * @permission:
 */
// import request from "@/request/request";

export function login() {
  // return request({
  //   url: "auth/login",
  //   method: "post",
  //   data
  // });
  return new Promise(resolve => {
    return resolve({
      user: {
        username: 11,
        name: 111
      },
      token: "3232"
    });
  });
}

export function getUserInfo() {
  // return request({
  //   url: "auth/info",
  //   method: "get"
  // });
  return new Promise(resolve => {
    return resolve({
      id: 3333,
      rule: [],
      token: "3232"
    });
  });
}
