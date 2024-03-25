<template>
  <div class="container">
    <div class="menu">
      <Menu :scalingMenu="scalingMenu"></Menu>
    </div>
    <div class="main-content">
      <div class="navbar">
        <Header @scaling=scaling :scalingMenu="scalingMenu"></Header>
      </div>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from '@/views/menu/index.vue'
import Header from '@/views/header/index.vue'
const scalingMenu = ref(false);

const scaling = () => {
  scalingMenu.value = !scalingMenu.value;
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.navbar {
  height: 50px;
  background-color: #666;
}

.content {
  overflow-y: auto;
}
</style>
