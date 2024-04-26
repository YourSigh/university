<template>
    <div class="header">
        <div class="left">
            <div class="header-scaling" @click="scaling">
                <i class="iconfont icon-zhankai" v-if="scalingMenu"></i>
                <i class="iconfont icon-shouqi" v-else></i>
            </div>
            <div class="header-title">
                <img src="/logo.png" alt="" class="header-title-small">
                <div class="header-title-big">大学校园一站式服务平台</div>
            </div>
        </div>
        <div class="right">
            <div class="header-color">
                <el-color-picker v-model="color"></el-color-picker>
            </div>
            <div class="header-person">
                <div></div>
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <div>{{ username }}</div>
                        <el-icon>
                            <ArrowDown />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <div class="uid">ID:{{ userStore.userInfo.uid }}</div>
                        <el-dropdown-menu>
                            <el-dropdown-item command="setting">个人中心</el-dropdown-item>
                            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as colorUtils from '@/util/color';
import { useTagsStore, useUserStore } from '@/store';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const tagStore = useTagsStore();
const userStore = useUserStore();

const scalingMenu = computed(() => tagStore.collapse);

const scaling = () => {
    tagStore.handleCollapse(!scalingMenu.value);
}

const username = ref(userStore.userInfo.username || '游客');

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

const handleCommand = (command: string) => {
    if (command === 'loginout') {
        localStorage.removeItem('loginToken');
        location.href = '/sign';
    } else if (command == 'setting') {
        router.push('/setting');
    }
}
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
        height: 100%;

        .header-scaling {
            cursor: pointer;
            font-size: 20px;
            margin-right: 10px;
        }

        .header-title {
            display: flex;
            align-items: center;
            position: relative;

            &-small {
                background-color: white;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }

            &-big {
                text-wrap: nowrap;
                color: var(--font-color);
                font-size: 20px;
            }
        }
    }

    .right {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .header-color {
            margin-right: 10px;
        }

        .header-person {
            display: flex;
            align-items: center;
            cursor: pointer;

            .user-name {
                margin-right: 10px;
                color: var(--font-color);

                .el-dropdown-link {
                    display: flex;
                    align-items: center;

                    .el-icon {
                        margin-left: 5px;
                    }
                }

            }
        }
    }
}

.uid {
    padding: 10px;
    text-align: center;
    font-size: var(--el-font-size-base);
}
</style>