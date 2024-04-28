<template>
    <div class="menu">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened router>
            <el-menu-item v-for="item in menuData" :key="item.index" :index="item.index">
                <i :class="item.icon" class="iconfont"></i>
                <template #title>{{ item.name }}</template>
            </el-menu-item>
            <el-menu-item class="setting" index="setting" style="position: absolute; bottom: 10px;">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>设置</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import defaultData from '@/views/menu/util/menuData'
import { computed, ref, onBeforeMount } from 'vue'
import router from '@/router';
import { useTagsStore, useUserStore, useAuthorityStore } from '@/store/index';
import {
    Setting,
} from '@element-plus/icons-vue';
import { getUserAuthority } from '@/api/authority';

const store = useTagsStore();
const userStore = useUserStore();
const authorityStore = useAuthorityStore();

const menuData: any = ref(defaultData);

onBeforeMount(() => {
    getUserAuthority({ uid: userStore.userInfo.uid }).then(res => {
        Object.keys(res.data.authority).forEach((item: any) => {
            menuData.value.forEach((menu: any) => {
                if (menu.index == '/' + item) {
                    menu.show = res.data.authority[item];
                }
            })
        })
        menuData.value = menuData.value.filter((item: any) => item.show);
        authorityStore.setAuthority(menuData.value);
    })
})

const onRoutes = computed(() => router.currentRoute.value.path);
const collapse = computed(() => store.collapse);

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
    width: 200px;
    background-color: var(--system-color);
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;

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

        .setting {
            background-color: var(--system-color);
        }

        .setting:hover {
            background-color: var(--hover-system-color);
        }
    }
}
</style>