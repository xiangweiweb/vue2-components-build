<template>
  <div id="app">
    <ui-form></ui-form>
    <ui-button @click="onClick" style="margin-top: 20px">hello</ui-button>
  </div>
</template>

<script>
import UIForm from 'vue2-components-build/components/form';
import UIButton from 'vue2-components-build/components/button';
import 'vue2-components-build/components/form/style/index.less';
import 'vue2-components-build/components/button/style/index.less';

export default {
    name: 'App',
    components: {
        [UIForm.name]: UIForm,
        [UIButton.name]: UIButton,
    },
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
