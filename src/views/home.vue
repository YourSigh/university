<template>
    <div class="about">
        <v-header />
        <v-menu />
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <v-tags></v-tags>
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in" appear>
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
.content {
    margin: 10px;
    padding: 30px;
    border-radius: 5px;
    height: calc(100% - 80px);
    background-color: white;
    div {
        height: 100%;
        width: 100%;
        overflow: auto;
    }
}
</style>
