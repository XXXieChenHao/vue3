/*
 * @Author: xie chenhao
 * @Date: 2022-02-17 21:10:56
 * @LastEditTime: 2022-02-17 21:49:57
 * @LastEditors: xie chenhao
 * @Description: 
 * @FilePath: \clayside-mis-vue\src\service\Login\index.ts
 * 生命不息，代码不止
 */

import {
  login,
  Info
} from './request'

import { LoginForm } from 'type/service/Login'

export const userLogin = async (params: LoginForm) => {
  let res = await login(params)
  return res
}
export const userInfo = async () => {
  let res = await Info()
  return res
}