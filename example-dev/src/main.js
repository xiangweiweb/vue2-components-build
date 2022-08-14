import Vue from 'vue'
import App from './App.vue'

// 引入没打包的文件
import 'vue2-components-build/components/index.less';
import vue2ComponentsBuild from 'vue2-components-build/components';
Vue.use(vue2ComponentsBuild);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
