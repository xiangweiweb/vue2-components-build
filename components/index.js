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

// unpkg引入时，会先引入vue并挂载到window对象上
if(typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
    console.log('vue2-components-build window.Vue存在');
    install(window.Vue);
}

