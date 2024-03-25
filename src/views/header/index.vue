<template>
    <div class="header">
        <div class="header-scaling" @click="scaling">
            <i class="iconfont icon-zhankai" v-if="scalingMenu"></i>
            <i class="iconfont icon-shouqi" v-else></i>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

defineProps({
    scalingMenu: Boolean,
})

const emit = defineEmits(['scaling']);

const scaling = () => {
    emit('scaling');
}
</script>

<style scoped lang="scss">
.header {
    &-scaling {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
}
</style>