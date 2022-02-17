/*
 * @Author: xie chenhao
 * @Date: 2022-02-17 21:11:00
 * @LastEditTime: 2022-02-17 21:50:38
 * @LastEditors: xie chenhao
 * @Description: 
 * @FilePath: \clayside-mis-vue\src\service\Login\request.ts
 * 生命不息，代码不止
 */

import { Request } from "@libs/request"

import { LoginForm } from 'type/service/Login'
// 用户登录
export const login = (params: LoginForm) => {
  return new Promise((resolve, reject) => {
    Request.post('/mis/login', params).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取用户信息
export const Info = () => {
  return new Promise((resolve, reject) => {
    Request.post('/mis/mis-user-info/getUserInfo', {
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}