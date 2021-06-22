import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '초기 메시지'
  },
  getters: {
    message (state) { return state.message }
  },
  mutations: {
    setMessage (state, payload) {
      console.log('payload.message :' + payload.message)
      console.log(payload.message)
      state.message = payload.message
    }
  },
  actions: {
    doUpdate ({ commit }, message) {
      commit('setMessage', { message })
    }
  },
  created () {
    console.log('store created')
    console.log(this.message)
  }
})
export default store
