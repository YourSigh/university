<template>
    <div v-color="'red'" v-my-loading="true">测试</div>
    <input v-model="color" type="color" />
    <el-button>test</el-button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import * as colorUtils from '@/util/color'

const color = ref('#409EFF')
watch(color, () => {
  document.documentElement.style.setProperty('--system-color', color.value)
  document.documentElement.style.setProperty('--font-color', colorUtils.getContrastYIQ(color.value));
  document.documentElement.style.setProperty('--hover-system-color', colorUtils.getHoverColor(color.value));
  document.documentElement.style.setProperty('--hover-font-color', colorUtils.getContrastYIQ(colorUtils.getHoverColor(color.value)));
})
</script>

<style scoped lang="scss">

</style>