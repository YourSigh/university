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
        <el-dialog title="提示" width="30%" v-model="isShowWarn">
            <span>您有一节课还有十五分钟开始，请注意！</span>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useTagsStore, useUserStore } from '@/store/index';
import vHeader from '@/views/header/index.vue';
import vMenu from '@/views/menu/index.vue';
import vTags from '@/views/tags/index.vue';
import { getClass } from '@/api/class';

export default defineComponent({
    components: {
        vHeader,
        vMenu,
        vTags,
    },
    setup() {
        const tagsStore = useTagsStore();
        const tagsList: any = computed(() =>
            tagsStore.tagsList.map((item) => item.name)
        );
        const collapse = computed(() => tagsStore.collapse);

        const isShowWarn = ref(false);

        const userStore = useUserStore();
        if (userStore.userInfo.type == 'student') {
            getClass({
                class: userStore.userInfo.class,
                userId: userStore.userInfo.uid,
            }).then((res: any) => {
                const now = new Date();
                const currentMinutes = now.getHours() * 60 + now.getMinutes();
                const filterItems = res.data.filter((i: any) => i.week % 7 == now.getDay());
                let minDifference = Number.MAX_VALUE;
                let closestTimeItem = null;

                filterItems.forEach((item: any) => {
                    // 将 item.start 转换为分钟数
                    const [hours, minutes] = item.start.split(':').map(Number);
                    const itemMinutes = hours * 60 + minutes;

                    // 计算当前时间与 item.start 之间的差值
                    const difference = itemMinutes - currentMinutes;

                    // 如果差值更小，则更新最近时间
                    if (difference < minDifference && difference > 15) {
                        minDifference = difference;
                        closestTimeItem = item;
                    }
                });

                if (closestTimeItem) {
                    // 开启计时器
                    setTimeout(() => {
                        isShowWarn.value = true;
                    }, (minDifference - 15) * 60 * 1000);
                }
            });
        }
        return {
            tagsList,
            collapse,
            isShowWarn,
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
