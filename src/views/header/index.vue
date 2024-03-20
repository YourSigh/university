<template>
    <div class="header">
        <div class="header-scaling" @click="scaling">
            <i class="iconfont">&#xe8b2;</i>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, defineEmits } from 'vue'

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