<template>
    <button class="border border-white rounded" :class="text">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['text'],
    data () {
        return {

        }
    }
}
</script>

<style scoped>

</style>