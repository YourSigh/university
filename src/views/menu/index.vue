<template>
    <div class="menu">
        <div class="menu-title">
            <div class="menu-title-small" v-if="scalingMenu"></div>
            <div class="menu-title-big" v-else>大学校园一站式服务平台</div>
        </div>
        
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="scalingMenu" @open="handleOpen"
            @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4" style="position: absolute; bottom: 0;">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>设置</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const props = defineProps({
    scalingMenu: Boolean
})

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
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
            background-image: url('/public/logo.png');
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