<template>
  <div id="app">
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'

export default {
  name: 'App',
  components: {
    EditForm
  },
  computed: {
    message () { return this.$store.getters.message }
    // message () { return 'message temp result' }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
