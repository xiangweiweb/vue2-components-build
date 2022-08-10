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
}; // 安装所有的一个index， 所有的style怎么处理，看element-ui
// future-ui为什么要打包两个format  main module的含义
// 需要打包的amd格式 引入所有

export { index as default };
