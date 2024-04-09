<template>
    <div class="header">
        <div class="left">
            <div class="header-scaling" @click="scaling">
                <i class="iconfont icon-zhankai" v-if="scalingMenu"></i>
                <i class="iconfont icon-shouqi" v-else></i>
            </div>
            <div class="header-title">
                <div class="header-title-small" v-if="scalingMenu"></div>
                <div class="header-title-big" v-else>大学校园一站式服务平台</div>
            </div>
        </div>
        <div clsss="right">
            <div class="header-feature">
                <div class="header-color">
                    <el-color-picker v-model="color"></el-color-picker>
                </div>
                <div class="header-person"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as colorUtils from '@/util/color';
import { useTagsStore } from '@/store';
import { computed, ref, watch } from 'vue';

const store = useTagsStore();

const scalingMenu = computed(() => store.collapse);

const scaling = () => {
    store.handleCollapse(!scalingMenu.value);
}

const color = ref(localStorage.getItem('systemColor') || '#409EFF');

const changeColor = () => {
    document.documentElement.style.setProperty('--system-color', color.value);
    document.documentElement.style.setProperty('--font-color', colorUtils.getContrastYIQ(color.value));
    document.documentElement.style.setProperty('--hover-system-color', colorUtils.getHoverColor(color.value));
    document.documentElement.style.setProperty('--hover-font-color', colorUtils.getContrastYIQ(colorUtils.getHoverColor(color.value)));
}
changeColor();
watch(color, () => {
    localStorage.setItem('systemColor', color.value);
    changeColor();
})
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    background-color: var(--hover-system-color);
    color: var(--hover-font-color);

    .left {
        display: flex;
        align-items: center;

        .header-scaling {
            cursor: pointer;
            font-size: 20px;
            margin-right: 10px;
        }

        .header-title {
            display: flex;
            &-small {
                background-image: url('/logo.png');
                background-size: 100% 100%;
                width: 50px;
                height: 50px;
            }
            &-big {
                text-wrap: nowrap;
                color: var(--font-color);
                font-size: 20px;
            }
        }
    }

    .right {
        display: flex;
        align-items: center;

        .header-feature {
            display: flex;
            align-items: center;

            .header-color {
                margin-right: 10px;
            }

            .header-person {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #fff;
            }
        }
    }
}
</style>