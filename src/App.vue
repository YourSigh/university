<template>
  <div id="app">
    <div class="sign" v-if="showSign">
      <RouterView />
    </div>
    <div class="container" v-else-if="token">
      <div class="menu">
        <Menu :scalingMenu="scalingMenu"></Menu>
      </div>
      <div class="main-content">
        <div class="navbar">
          <Header @scaling=scaling :scalingMenu="scalingMenu"></Header>
        </div>
        <div class="content-outside">
          <div class="content">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Menu from '@/views/menu/index.vue'
import Header from '@/views/header/index.vue'
const scalingMenu = ref(false);
const $route = useRoute();

const token = ref(localStorage.getItem('loginToken'));
watch(() => $route.path, () => {
  token.value = localStorage.getItem('loginToken');
})

const scaling = () => {
  scalingMenu.value = !scalingMenu.value;
}

const showSign = computed(() => {
  return $route.path == '/sign';
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--font-color);
}

.sign {
  height: 100vh;
  width: 100vw;
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
}

.content-outside {
  overflow-y: auto;
  height: calc(100vh - 50px);
  width: 100%;
  background-color: #eee;
  padding: 10px;

  .content {
    border-radius: 8px;
    height: 100%;
    overflow: auto;
    background-color: var(--system-color);
  }
}
</style>
