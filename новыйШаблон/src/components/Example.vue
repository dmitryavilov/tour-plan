<template>
    <h1 class="h1">Hello <span class="h1__span">hello</span></h1>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .h1 {
        color: red;
        display: flex;

        &__span {
            color: greenyellow;
        }
    }
</style>