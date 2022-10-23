<template>
    <n-space vertical class="list">
        <n-gradient-text :size="24" type="success">Today</n-gradient-text>
        <template  v-for="todo in ui.todos" :key="todo">
            <list-item v-if="!this.done" :description="todo"/>
        </template>
        <n-input v-model:value="ui.newTodo" type="text" placeholder="What else?" v-on:keyup.enter="onEnter" :autofocus="true" :clearable="true" />
    </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ListItem from "./ListItem.vue"
import { NSpace, NInput, NGradientText } from 'naive-ui'

// data
const ui = ref({
    newTodo: '',
    todos: ref(['item A', 'item B', 'item C']),
})

// methods
const onEnter = () => {
    // add input's content to a new ListItem, add the ListItem to the List, clear out input
    if (ui.value.newTodo != '') {
        ui.value.todos.push(ui.value.newTodo)
        // clear out input
        ui.value.newTodo = ''
    } 

    console.log(`todos [${ui.value.todos}]`)
}

</script>

<style lang="scss" scoped>
@import "../assets/variables";

.list {
  // margin: 50px 10px;
  margin: $default-margin;
  padding: $default-padding;
  border: 2px solid $base-outline-color;
  border-radius: 2rem;
}
</style>