/*
 * @name:
 * @Date: 2021-02-20 13:03:34
 * @LastEditTime: 2021-02-20 13:11:05
 * @FilePath: \ai_cloud\src\store\user.js
 * @permission:
 */
import { reactive } from "vue";

export const user = reactive({
  username: "",
  id: 0,
  role: ""
});

export function setUser(val) {
  user.id = val.id;
  user.role = val.role;
  user.username = val.username;
}
