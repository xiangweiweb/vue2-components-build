<template>
    <button class="ui-button" v-on="$listeners">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ui-button',
}
</script>
