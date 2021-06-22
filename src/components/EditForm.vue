<template>
  <div class="edit-form">
    <!-- <input type="text" :value="message" @input="doUpdate"> -->
    <input v-model="message">
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message: {
      // return this.$store.getters.message
      get () { return this.$store.getters.message },
      set (value) { this.$store.dispatch('doUpdate', value) }
    }
  },
  created () {
    console.log('this.$data1 : ' + this.$data)
    // console.log('this.store.getters.message : ' + this.$store.getters.message)
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
