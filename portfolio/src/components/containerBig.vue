<template>
    <div class="container container_big" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import Container from './Container.vue'
export default {
    props: {
        classes: String
    }
}
</script>

<style lang="scss">
    .container_big {
        max-width: 1560px;
    }
</style>