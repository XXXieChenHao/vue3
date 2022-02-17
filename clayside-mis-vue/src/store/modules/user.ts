/*
 * @Author: xie chenhao
 * @Date: 2022-02-17 21:08:33
 * @LastEditTime: 2022-02-17 21:53:49
 * @LastEditors: xie chenhao
 * @Description: 
 * @FilePath: \clayside-mis-vue\src\store\modules\user.ts
 * 生命不息，代码不止
 */

import { userLogin, userInfo } from 'api/Login/index';
import { UserState, UserInfo } from 'type/store/user';
import { LoginForm } from 'type/service/Login'


// 默认信息
const defaultState: () => UserState = () => {
  return {
    token: '',
    codeData: '',
    userInfo: {
      userNickName: ''
    },
  }
}
const state = defaultState()

const mutations = {
  RESET_STATE: (state: UserState) => {
    state = defaultState()
  },
  SET_TOKEN: (state: UserState, token: string) => {
    state.token = token
  },
  SET_USERINFO: (state: UserState, userInfo: string) => {
    state.userInfo = userInfo
  }
}

const actions = {
  // user login action
  login( { commit }: any, userInfo: LoginForm) {
    const params = userInfo
    return new Promise((resolve, reject) => {
      userLogin(params).then(res => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

