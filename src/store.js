import 'babel-polyfill'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    list: [
      {id: 1, name: 'Apple', price: 100},
      {id: 2, name: 'Banana', price: 200},
      {id: 3, name: 'Strawberry', price: 400},
      {id: 4, name: 'Orange', price: 300},
      {id: 5, name: 'Melon', price: 500}
    ]
  },
  getters: {
    count (state, getters, rootState, rootGetter) {
      return state.count
    },
    max (state) {
      return state.list.reduce((a, b) => {
        return a > b.price ? a : b.price
      }, 0)
    },
    item (state) {
      return id => state.list.find(el => el.id === id)
    },
    name (state, getters) {
      return id => getters.item(id).name
    }

  },
  mutations: {
    increment (state) {
      state.count++
    },
    mutationType (state, payload) {
      state.count = payload
    }
  },
  actions: {
    actionType ({ commit }, payload) {
      commit('mutationType', payload)
    },
    testAction ({ commit }) {
      commit('increment')
    }
  }
})
export default store
