import Button from 'vue2-components-build/components/button';
import Form from 'vue2-components-build/components/form';

const components = [Button, Form];

const install = (Vue) => {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
}

export default {
    install,
    Button,
    Form,
}
// 安装所有的一个index， 所有的style怎么处理，看element-ui
// future-ui为什么要打包两个format  main module的含义
// 需要打包的amd格式 引入所有
