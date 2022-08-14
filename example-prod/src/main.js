import Vue from 'vue';
import { Form } from 'vue2-components-build';

Vue.use(Form);

import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
