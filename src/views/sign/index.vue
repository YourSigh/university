<template>
    <div class="meteor-right"></div>
    <div class="meteor-left"></div>
    <div class="sign">
        <div class="title">欢迎使用大学校园一站式服务平台</div>
        <div class="content"> 
            <el-menu mode="horizontal" class="sign-title" default-active="1" @select="menuSelect">
                <el-menu-item index="1">登录</el-menu-item>
                <el-menu-item index="2">注册</el-menu-item>
            </el-menu>
            <div class="sign-content">
                <login v-if="selectMenu == '1'"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import login from './components/login.vue';

const selectMenu = ref('1');
const menuSelect = (index: string) => {
    selectMenu.value = index;
}
</script>

<style scoped lang="scss">
.sign {
    height: 100vh;
    width: 100vw;
    background-color: var(--system-color);

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        font-size: 24px;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 350px;
        height: 500px;
        background-color: var(--hover-system-color);
        border-radius: 10px;

        .sign-title {
            width: 300px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 50px;
            border-radius: 8px 8px 0 0;
        }
        .sign-content {
            width: 300px;
            height: 400px;
            border-radius: 0 0 8px 8px;
            overflow: hidden;
        }
    }
}

.meteor-right {
    position: fixed;
    top: 0;
    right: 0;
    width: 150vh;
    height: 50px;
    border-radius: 50px 0 0 50px;
    background: linear-gradient(90deg,
            rgba(255, 0, 0, 1) 0%,
            rgba(255, 255, 0, 1) 25%,
            rgba(0, 255, 0, 1) 50%,
            rgba(0, 255, 255, 1) 75%,
            rgba(0, 0, 255, 1) 100%);
    ;
    transform: rotate(-35deg);
    transform-origin: top right;
    animation: meteor-right-move 2s linear forwards;
    z-index: 999;
}

.meteor-left {
    position: fixed;
    top: 0;
    left: 0;
    width: 150vh;
    height: 50px;
    border-radius: 0 50px 50px 0;
    background: linear-gradient(90deg,
            rgba(0, 0, 255, 1) 0%,
            rgba(0, 255, 255, 1) 25%,
            rgba(0, 255, 0, 1) 50%,
            rgba(255, 255, 0, 1) 75%,
            rgba(255, 0, 0, 1) 100%);
    transform: rotate(35deg);
    transform-origin: top left;
    animation: meteor-left-move 2s linear forwards;
    z-index: 999;
}

@keyframes meteor-right-move {
    from {
        top: 0;
        right: 0;
    }

    to {
        top: 100vh;
        right: 100vw;
    }
}

@keyframes meteor-left-move {
    from {
        top: 0;
        left: 0;
    }

    to {
        top: 100vh;
        left: 100vw;
    }
}
</style>