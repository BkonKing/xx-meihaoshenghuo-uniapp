import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../api/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    access_token: uni.getStorageSync('access_token') || '',
    refresh_token: uni.getStorageSync('access_token') || '',
    user_info: uni.getStorageSync('user_info') || '',
    hasLogin: false,
    loginProvider: "",
    openid: null,
    testvuex: false,
    colorIndex: 0,
    colorList: ['#FF0000', '#00FF00', '#0000FF']
  },
  mutations: {
    setAccess_token(state, value) {
      state.access_token = value
      uni.setStorageSync('access_token', value)
    },
    setRefresh_token(state, value) {
      state.refresh_token = value
      uni.setStorageSync('refresh_token', value)
    },
    setUser_info(state, value) {
      state.user_info = value
      uni.setStorageSync('user_info', value)
    },
    login(state, provider) {
      state.hasLogin = true;
      state.loginProvider = provider;
    },
    logout(state) {
      state.hasLogin = false
      state.openid = null
    },
    setOpenid(state, openid) {
      state.openid = openid
    },
    setTestTrue(state) {
      state.testvuex = true
    },
    setTestFalse(state) {
      state.testvuex = false
    },
    setColorIndex(state, index) {
      state.colorIndex = index
    }
  },
  getters: {
    currentColor(state) {
      return state.colorList[state.colorIndex]
    }
  },
  actions: {
    login: async function({
      commit,
      state
    }) {
      return await new Promise((resolve, reject) => {
        uni.showLoading({
          title: '正在登录中...'
        })
        login().then((res) => {
          if (res.success) {
            const { data } = res
            commit('setAccess_token', data.access_token)
            commit('setRefresh_token', data.refresh_token)
            commit('setUser_info', data)
            uni.hideLoading()
            resolve()
          } else {
            reject()
          }
        })
      })
    },
    // lazy loading openid
    getUserOpenId: async function({
      commit,
      state
    }) {
      return await new Promise((resolve, reject) => {
        if (state.openid) {
          resolve(state.openid)
        } else {
          uni.login({
            success: (data) => {
              commit('login')
              setTimeout(function() { //模拟异步请求服务器获取 openid
                const openid = '123456789'
                console.log('uni.request mock openid[' + openid + ']');
                commit('setOpenid', openid)
                resolve(openid)
              }, 1000)
            },
            fail: (err) => {
              console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
              reject(err)
            }
          })
        }
      })
    }
  }
})

export default store
