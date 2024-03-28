<template>
    <div class="menu">
        <div class="menu-title">
            <div class="menu-title-small" v-if="scalingMenu"></div>
            <div class="menu-title-big" v-else>大学校园一站式服务平台</div>
        </div>
        
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="scalingMenu" @select="handleSelect">
            <el-menu-item v-for="item in menuData" :key="item.id" :index="item.id">
                <i :class="item.icon" class="iconfont"></i>
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
import menuData from '@/views/menu/util/menuData'
import router from '@/router';
import {
    Setting,
} from '@element-plus/icons-vue'

defineProps({
    scalingMenu: Boolean
})

const handleSelect = (index:String) => {
    // 根据点击的菜单项的index值跳转到对应的路由
    router.push({
        path: '/' + index
    })
}
</script>

<style lang="scss" scoped>
.iconfont::before {
    width: 24px;
    height: 18px;
    margin-right: 5px;
    font-size: 18px;
    text-align: center;
}
.menu {
    height: 100%;
    background-color: var(--system-color);
    &-title {
        width: 100%;
        height: 60px;
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
            color: var(--font-color);
        }
    }
    .el-menu {
        height: calc(100% - 60px);
        position: relative;
        background-color: var(--system-color);
        border: none;
        
        .el-menu-item {
            width: 100%;
            color: var(--font-color);
        }
        .is-active {
            background-color: var(--hover-system-color);
            color: var(--hover-font-color);
        }
        .el-menu-item:hover {
            background-color: var(--hover-system-color);
        }
    }
}
</style>