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
// js打包
// css
// 多语言

