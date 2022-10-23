<template>
  <n-space class="header">
    <n-gradient-text type="info" :size="36">👋 Hello, Priyanka!</n-gradient-text>
  </n-space>

  <n-space vertical class="list-group">
      <List class="list"/>
  </n-space>
  

</template>

<script setup lang="ts">
import List from './components/List.vue'
import { NSpace, NGradientText } from 'naive-ui'
import { ref } from 'vue'

const ui = ref({

})

</script>

<style lang="scss" scoped>
@import "./assets/variables";



.header {
  padding: 40px;
  background-color: lightcyan;
}

</style>
