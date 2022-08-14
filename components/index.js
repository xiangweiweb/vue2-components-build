import Button from 'vue2-components-build/components/button';
import Form from 'vue2-components-build/components/form';

const components = [Button, Form];

const install = (Vue) => {
    components.forEach((component) => {
        Vue.use(component.name);
    });
}

export {
    Button,
    Form,
}

export default {
    install
};

