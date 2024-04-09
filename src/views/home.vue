<template>
    <div class="about">
        <v-header />
        <v-menu />
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <v-tags></v-tags>
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useTagsStore } from '@/store/index';
import vHeader from '@/views/header/index.vue';
import vMenu from '@/views/menu/index.vue';
import vTags from '@/views/tags/index.vue';

export default defineComponent({
    components: {
        vHeader,
        vMenu,
        vTags,
    },
    setup() {
        const tagsStore = useTagsStore();
        const tagsList:any = computed(() =>
            tagsStore.tagsList.map((item) => item.name)
        );
        const collapse = computed(() => tagsStore.collapse);
        return {
            tagsList,
            collapse,
        };
    },
});
</script>

<style scoped>
</style>
