<template>
    <div>
        <h3>[ ] List Item</h3>
    </div>
</template>

<script setup>
    defineProps({
        name: {
            type: String,
            required: true
        },
        done: {
            type: boolean,
            required: true
        }
    })
</script>

<style lang="scss" scoped>
</style>