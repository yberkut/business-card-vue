import Vue from 'vue'
import Vuex from 'vuex'
import { getUser } from './api/usersRegistry'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: undefined,
    error: undefined
  },
  getters: {
    fullName(state) {
      const { user } = state
      const firstName = (user && user.firstName) || ''
      const lastName = (user && user.lastName) || ''
      return `${firstName} ${lastName}`
    },
    description(state) {
      return state.user && state.user.description
    },
    fullInfo(state) {
      return state.user && state.user.info || []
    },
    shortInfo(state) {
      const info = state.user && state.user.info || []
      return info.filter(record => record.title.toLowerCase() !== 'age')
    },
    qrCode(state) {
      return state.user && state.user.qrCode || ''
    },
    social(state) {
      return state.user && state.user.social || []
    }
  },
  mutations: {
    profileLoaded(state, payload) {
      state.error = false
      state.user = payload
    }
  },
  actions: {
    fetchData({ commit }) {
      getUser(user => {
        commit('profileLoaded', user)
      })
    }
  }
})
