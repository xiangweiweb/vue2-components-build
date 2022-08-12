import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import Button from 'vue2-components-build/lib/button';
import Form from 'vue2-components-build/lib/form';

var components = [Button, Form];

var install = function install(Vue) {
  _forEachInstanceProperty(components).call(components, function (component) {
    Vue.component(component.name, component);
  });
};

var index = {
  install: install,
  Button: Button,
  Form: Form
}; // js打包
// css
// 多语言

export { index as default };
