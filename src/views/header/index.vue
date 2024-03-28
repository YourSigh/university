<template>
    <div class="header">
        <div class="header-scaling" @click="scaling">
            <i class="iconfont icon-zhankai" v-if="scalingMenu"></i>
            <i class="iconfont icon-shouqi" v-else></i>
        </div>
        <div class="header-feature">
            <div class="header-color">
                <el-color-picker v-model="color"></el-color-picker>
            </div>
            <div class="header-person"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as colorUtils from '@/util/color';
import { ref, watch } from 'vue';
defineProps({
    scalingMenu: Boolean,
})

const emit = defineEmits(['scaling']);

const scaling = () => {
    emit('scaling');
}

const color = ref(localStorage.getItem('systemColor') || '#409EFF');

const changeColor = () => {
    document.documentElement.style.setProperty('--system-color', color.value);
    document.documentElement.style.setProperty('--font-color', colorUtils.getContrastYIQ(color.value));
    document.documentElement.style.setProperty('--hover-system-color', colorUtils.getHoverColor(color.value));
    document.documentElement.style.setProperty('--hover-font-color', colorUtils.getContrastYIQ(colorUtils.getHoverColor(color.value)));
}
changeColor();
watch(color, () => {
    localStorage.setItem('systemColor', color.value);
    changeColor();
})
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    background-color: var(--hover-system-color);
    color: var(--hover-font-color);
    &-scaling {
        cursor: pointer;
    }
}
</style>