<template>
  <div id="app">
    <ui-form></ui-form>
    <ui-button @click="onClick" style="margin-top: 20px">hello</ui-button>
  </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        onClick() {
            alert('click hello');
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
