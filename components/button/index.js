import UIButton from './index.vue';

UIButton.install = function(Vue) {
    Vue.component(UIButton.name, UIButton);
}

export default UIButton;
