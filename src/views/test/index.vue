<template>
    <div v-color="'red'" v-my-loading="true">测试</div>
    <input v-model="color" type="color" />
    <el-button>test</el-button>
    <div class="test"></div>
    <el-tree :data="treeData" ></el-tree>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import * as colorUtils from '@/util/color'
import * as userApi from '@/api/user'

userApi.getUser({}).then(res => {
  console.log(res)
})

const color = ref('#409EFF')
watch(color, () => {
  document.documentElement.style.setProperty('--system-color', color.value)
  document.documentElement.style.setProperty('--font-color', colorUtils.getContrastYIQ(color.value));
  document.documentElement.style.setProperty('--hover-system-color', colorUtils.getHoverColor(color.value));
  document.documentElement.style.setProperty('--hover-font-color', colorUtils.getContrastYIQ(colorUtils.getHoverColor(color.value)));
})

const treeData = ref([
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  }
])
</script>

<style scoped lang="scss">
.test {
  // 中间是圆的正方形
  width: 100px;
  height: 100px;
  background-color: blue;
  background: radial-gradient(circle at left top, transparent 100px, black 0);
}
</style>