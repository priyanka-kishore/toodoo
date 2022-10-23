<template>
    <div>
        <!-- <n-checkbox size="large" :label="props.description" :checked-value="true" :unchecked-value="false" @update:checked="updateIfDone"/> -->
        <n-checkbox 
            v-model:checked="ui.done" 
            @update:checked="updateIfDone" 
            size="large" :label="props.description" />
        <!-- <n-checkbox size="large" :label="props.description" @click="$emit('itemDone')"/> -->

    </div>
    {{ props }} + {{ ui }}

</template>

<script setup lang="ts">
import { NCheckbox } from 'naive-ui'
import { emit } from 'process';
import { ref } from 'vue'


// data
const ui = ref({
    done: false
})

const props = withDefaults(defineProps<{
    description: string
}>(), {})


const updateIfDone = (value: boolean) => {
    ui.value.done = value
    console.log(value)
}

</script>

<style lang="scss" scoped>
@import "../assets/variables";


</style>