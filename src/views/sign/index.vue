<template>
    <div class="meteor-right"></div>
    <div class="meteor-left"></div>
    <div class="sign">
        <div class="content-left">
            <div class="title">欢迎使用大学校园一站式服务平台</div>
            <loading :size="220"></loading>
            <img src="/logo.png" alt="">
        </div>
        <div class="content-right">
            <el-menu mode="horizontal" class="sign-title" default-active="1" @select="menuSelect">
                <el-menu-item index="1">登录</el-menu-item>
                <el-menu-item index="2">注册</el-menu-item>
            </el-menu>
            <div class="sign-content">
                <login v-if="selectMenu == '1'" />
                <register v-else />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import login from './components/login.vue';
import register from './components/register.vue';

const selectMenu = ref('1');
const menuSelect = (index: string) => {
    selectMenu.value = index;
}
</script>

<style scoped lang="scss">
.sign {
    height: 100vh;
    width: 100vw;
    // background-color: var(--system-color);
    background: linear-gradient(45deg, white, var(--system-color));
    background-size: 400% 400%;
    position: relative;
    animation: gradientBG 15s ease infinite;
    overflow: hidden;
    display: flex;
    align-items: center;

    .content-left {
        height: 100%;

        .title {
            font-size: 40px;
            font-weight: bold;
            background: linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin: 50px 100px;
            height: 100px;
            line-height: 100px;
        }

        .loading {
            margin: 0 auto;
        }

        img {
            width: 200px;
            height: 200px;
            position: absolute;
            top: 210px;
            left: 310px;
        }
    }

    .content-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 330px;
        height: 400px;
        background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
        border-radius: 10px;

        .sign-title {
            width: 280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 50px;
            border-radius: 8px 8px 0 0;
            overflow: hidden;

            .el-menu-item {
                width: 80px;
            }
        }

        .sign-content {
            width: 280px;
            height: 300px;
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

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
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