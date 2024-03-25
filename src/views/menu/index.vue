<template>
    <div class="menu">
        <div class="menu-title">
            <div class="menu-title-small" v-if="scalingMenu"></div>
            <div class="menu-title-big" v-else>大学校园一站式服务平台</div>
        </div>
        
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="scalingMenu" @select="handleSelect">
            <el-menu-item v-for="item in menuData" :key="item.id" :index="item.id">
                <i :class="item.icon"></i>
                <template #title>{{ item.name }}</template>
            </el-menu-item>
            <el-menu-item index="setting" style="position: absolute; bottom: 0;">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>设置</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import menuData from '@/views/menu/util/menuData'
import {
    Setting,
} from '@element-plus/icons-vue'

defineProps({
    scalingMenu: Boolean
})

const handleSelect = (index:String) => {
    // 根据点击的菜单项的index值跳转到对应的路由
    console.log(index);
}
</script>

<style lang="scss" scoped>
.menu {
    height: 100%;
    &-title {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        &-small {
            background-image: url('/logo.png');
            background-size: 100% 100%;
            width: 50px;
            height: 50px;
        }
        &-big {
            text-wrap: nowrap;
        }
    }
    .el-menu {
        height: calc(100% - 50px);
        position: relative;
        .el-menu-item {
            width: 100%;
        }
    }
}
</style>