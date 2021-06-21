// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from '@/store.js'

Vue.config.productionTip = false

var windowPlugin = {
  install: function (Vue) {
    var store = new Vue({
      data: {
        scrollY: 10
      }
    })

    var timer = null
    window.addEventListener('scroll', function () {
      console.log('addEventListener start')
      if (timer === null) {
        timer = setTimeout(function () {
          console.log('window.scrollY : ' + window.scrollY)
          store.scrollY = window.scrollY
          clearTimeout(timer)
          timer = null
        }, 200)
      }
    })
    console.log('store.$data.scrollY : ' + store.$data.scrollY)
    Vue.prototype.$window = store.$data
    console.log('Vue.prototype.$window.scrollY : ' + Vue.prototype.$window.scrollY)
  }
}

Vue.use(windowPlugin)
Vue.use(Vuex)

Vue.component('my-component', {
  template: '<div>{{scrollY}}</div>',
  computed: {
    scrollY: function () {
      console.log('this.window.scrollY = ' + this.$window.scrollY)
      return this.$window.scrollY
    }
  }
})

/* eslint-disable no-new */
var example = new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  methods: {
    funcTest: function () {
      console.log('this : ' + this)
    }
  }
})

example.funcTest()
console.log('store.state.count : ' + store.state.count)
store.commit('increment')
console.log('store.state.count : ' + store.state.count)
// store.dispatch('testAction')
console.log('store.getters.max : ' + store.getters.max)
