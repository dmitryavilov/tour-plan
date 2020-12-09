<template>
  <button class="default-settings" :class="classes"><slot></slot></button>
</template>

<script>
export default {
    props: {
        classes: String
    }
}
</script>

<style lang="scss" scoped>
    .default-settings {
        background-color: rgba( 1, 1, 1, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        border-style: solid;
        font-family: 'Montserrat' sans-serif;
    }
</style>