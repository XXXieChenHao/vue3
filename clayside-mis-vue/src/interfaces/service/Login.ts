/*
 * @Author: xie chenhao
 * @Date: 2022-02-17 21:48:13
 * @LastEditTime: 2022-02-17 21:49:27
 * @LastEditors: xie chenhao
 * @Description: 
 * @FilePath: \clayside-mis-vue\src\interfaces\service\Login.ts
 * 生命不息，代码不止
 */
// 登录表单类型
export interface LoginForm {
  userName: string | number;
  pass: string | number;
  captchaVerification: any
}