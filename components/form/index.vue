<template>
    <div class="ui-form-container">
        <div style="font-weight: bold; margin-bottom: 15px;">组件 ui-form</div>
        <div class="ui-form-content">
            count: {{count}}
        </div>
        <div class="ui-form-footer">
            <ui-button @click="onClick">count++</ui-button>
        </div>
    </div>
</template>

<script>
import Button from 'vue2-components-build/components/button';
import { addCount } from 'vue2-components-build/src/utils/util.js';

export default {
    name: 'ui-form',

    components: {
        [Button.name]: Button,
    },

    data() {
        return {
            count: 0,
        }
    },

    methods: {
        onClick() {
            this.count = addCount(this.count);
        }
    }
}
</script>
