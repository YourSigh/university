<template>
    <div class="tags" v-if="showTags">
        <ul>
            <li class="tags-li" v-for="(item, index) in tagsList" :class="{ 'active': isActive(item.path || '/') }"
                :key="index">
                <router-link :to="item.path || '/'" class="tags-li-title">{{ item.title }}</router-link>
                <span class="tags-li-icon" @click="closeTags(index)">
                    <el-icon>
                        <Close />
                    </el-icon>
                </span>
            </li>
        </ul>
        <div class="tags-close-box">
            <el-dropdown @command="handleTags">
                <el-button size="small" type="primary">
                    标签选项
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu size="small">
                        <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate, RouteLocationNormalizedLoaded } from 'vue-router';
import { useTagsStore } from '@/store'; // 确保路径正确

const route = useRoute();
const router = useRouter();
const tagsStore = useTagsStore();

const tagsList = computed(() => tagsStore.tagsList);

const isActive = (path: string) => {
    return path === route.fullPath;
};

const showTags = computed(() => tagsStore.tagsList.length > 0);

const closeTags = (index: number) => {
    const delItem = tagsStore.tagsList[index];
    tagsStore.delTagsItem(index);
    const item = tagsList.value[index] || tagsList.value[index - 1];
    if (item) {
        if (delItem.path === route.fullPath && item?.path) {
            router.push(item?.path);
        }
    } else {
        router.push('/');
    }
};

const setTags = (route: RouteLocationNormalizedLoaded) => {
    const isExist = tagsList.value.some((item) => {
        return item.path === route.fullPath;
    });
    if (!isExist) {
        if (tagsList.value.length >= 8) {
            tagsStore.delTagsItem(0);
        }
        tagsStore.setTagsItem({
            name: route.name,
            title: route.meta?.title,
            path: route.fullPath,
        });
    }
};

setTags(route);

onBeforeRouteUpdate((to: any) => {
    setTags(to);
});

const closeAll = () => {
    tagsStore.clearTags();
    router.push('/');
};

const closeOther = () => {
    const curItem: any = tagsList.value.filter((item) => item.path === route.fullPath);
    tagsStore.closeTagsOther(curItem);
};

const handleTags = (command: string) => {
    if (command === 'other') {
        closeOther();
    } else {
        closeAll();
    }
};
</script>

<style lang="scss" scoped>
.tags {
    position: relative;
    height: 30px;
    overflow: hidden;
    background: #fff;
    padding-right: 120px;
    box-shadow: 0 5px 10px #ddd;
}

.tags ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}

.tags-li {
    float: left;
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    height: 23px;
    line-height: 23px;
    border: 1px solid #e9eaec;
    background: white;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: black;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
    background: var(--hover-system-color);
    .tags-li-title, .tags-li-icon {
        color: var(--font-color);
    }
}

.tags-li.active {
    background-color: var(--system-color);
    .tags-li-title, .tags-li-icon {
        color: var(--font-color);
    }
}

.tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: black;
}

.tags-li-icon {
    display: flex;
    align-items: center;
    height: 100%;
}

.tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
}
</style>