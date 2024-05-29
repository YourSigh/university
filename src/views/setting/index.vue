<template>
    <div class="setting">
        <div class="title">设置</div>
        <div class="content">
            <div class="left">
                <div class="headshot">
                    <img src="https://yoursigh.top/music-img/10001.png" alt="头像">
                </div>
                <div class="username">
                    <span>用户名：</span>
                    <span>{{ userStore.userInfo.username }}</span>
                </div>
                <div class="uid">
                    <span>账号：</span>
                    <span>{{ userStore.userInfo.uid }}</span>
                </div>
            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';

const userStore = useUserStore();

</script>

<style lang="scss" scoped>
.setting {
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .content {
        display: flex;
        height: calc(100% - 90px);
        .left {
            flex: 1;
            height: 100%;
            background-color: var(--system-color);
            color: var(--font-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            .headshot {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .username, .uid {
                margin-top: 20px;
                span {
                    font-size: 16px;
                    margin-right: 10px;
                }
            }
        }
        .right {
            flex: 2;
        }
    }
}
</style>