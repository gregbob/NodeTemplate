<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome To Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    fetchAPIData() {
      fetch("http://localhost:4000/example", {
          'method': 'GET'
        })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            alert("Fail!")
          }
        })
        .then(response => {
          console.log(response)
        })
    }
  },
  mounted() {
    this.fetchAPIData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
