<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <my-component/>
    <ul>
      <li v-for="{ id, name } in list" v-bind:key="id">{{name}}</li>
    </ul>
    <ul>
      <li v-for="item in list" v-bind:key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [
        {id: 1, name: 'Apple', price: 100},
        {id: 2, name: 'Banana', price: 200},
        {id: 3, name: 'Strawberry', price: 400},
        {id: 4, name: 'Orange', price: 300},
        {id: 5, name: 'Melon', price: 500}
      ]
    }
  },
  created () {
    console.log('HelloWorld created : this.$store.state.count :' + this.$store.state.count)
    console.log('HelloWorld created : this.$store.getters.count :' + this.$store.getters.count)
    console.log('HelloWorld created : this.$store.getters.item(1) :' + this.$store.getters.item(1))
    console.log('HelloWorld created : this.$store.getters.name(1) :' + this.$store.getters.name(1))
    this.$store.commit('mutationType', 44)
    console.log('HelloWorld created : this.$store.getters.count 1:' + this.$store.getters.count)
    console.log('this.$store.dispatch(actionType)')
    this.$store.dispatch('actionType', 66)
    console.log('HelloWorld created : this.$store.getters.count 2:' + this.$store.getters.count)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
