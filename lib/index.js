import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import Button from 'vue2-components-build/lib/button';
export { default as Button } from 'vue2-components-build/lib/button';
import Form from 'vue2-components-build/lib/form';
export { default as Form } from 'vue2-components-build/lib/form';

var components = [Button, Form];

var install = function install(Vue) {
  _forEachInstanceProperty(components).call(components, function (component) {
    Vue.use(component.name);
  });
};
var index = {
  install: install
}; // unpkg引入时，会先引入vue并挂载到window对象上

if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  console.log('vue2-components-build window.Vue存在');
  install(window.Vue);
}

export { index as default };
