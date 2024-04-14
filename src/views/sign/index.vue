<template>
    <!-- <div class="meteor-right"></div>
    <div class="meteor-left"></div> -->
    <div class="sign">
        <div class="content-left">
            <div class="title">欢迎使用大学校园一站式服务平台</div>
            <ring :size="220"></ring>
            <img src="/logo.png" alt="">
            <div class="saturn">
            <span class="rings"></span>
        </div>
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
    background: linear-gradient(45deg, pink, #409eff);
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

        .ring {
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
        min-width: 330px;
        height: 400px;
        // background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
        border-radius: 10px;
        overflow: hidden;
        position: relative;

        .sign-title {
            width: 280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 50px;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            position: absolute;
            z-index: 1;
            top: 25px;

            .el-menu-item {
                width: 80px;
            }
        }

        .sign-content {
            width: 280px;
            height: 300px;
            border-radius: 0 0 8px 8px;
            z-index: 1;
            overflow: hidden;
            position: absolute;
            top: 75px;
        }
    }

    .content-right::before {
        content: '';
        width: 600px;
        height: 600px;
        border-radius: 10px;
        margin: -100px;
        animation: circleRound 3s linear infinite;
        // background-image: radial-gradient(circle at center, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
        // background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
        background: linear-gradient(45deg, pink, #409eff);
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

@keyframes circleRound {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

<style>
.saturn {
    width: 20em;
    height: 20em;
    font-size: 20px;
    position: relative;
    transform: rotate(-15deg);
    animation: spinSaturn 10s linear infinite;
}

.saturn::before,
.saturn::after {
    content: '';
    position: absolute;
    width: 9em;
    height: 9em;
    background:
        radial-gradient(circle at top,
            transparent 40%,
            black),
        radial-gradient(transparent 62%,
            black),
        linear-gradient(rgba(212, 203, 174, 1) 0%,
            rgba(212, 203, 174, 1) 10%,
            rgba(221, 203, 157, 1) 15%,
            rgba(221, 203, 157, 1) 17%,
            rgba(213, 181, 143, 1) 22%,
            rgba(213, 181, 143, 1) 26%,
            rgba(208, 180, 158, 1) 32%,
            rgba(208, 180, 158, 1) 36%,
            rgba(218, 188, 162, 1) 37%,
            rgba(218, 188, 162, 1) 39%,
            rgba(211, 184, 157, 1) 41%,
            rgba(211, 184, 157, 1) 49%,
            rgba(205, 186, 156, 1) 51%,
            rgba(205, 186, 156, 1) 52%,
            rgba(202, 176, 153, 1) 53%,
            rgba(202, 176, 153, 1) 65%,
            rgba(190, 177, 145, 1) 68%,
            rgba(190, 177, 145, 1) 80%,
            rgba(150, 144, 130, 1) 91%,
            rgba(150, 144, 130, 1) 95%,
            rgba(131, 129, 117, 1) 97%,
            rgba(131, 129, 117, 1) 100%);
    border-radius: 50%;
    left: calc((20em - 9em) / 2);
    top: calc((20em - 9em) / 2);
}

.saturn::before {
    clip-path: inset(50% 0 0 0);
}

.saturn::after {
    clip-path: inset(0 0 50% 0);
}

.rings {
    position: absolute;
    width: inherit;
    height: inherit;
    background: radial-gradient(rgba(24, 19, 25, 0) 0%,
            rgba(53, 52, 51, 0) 34%,
            rgba(55, 54, 52, 1) 36%,
            rgba(56, 55, 53, 1) 37%,
            rgba(68, 67, 66, 1) 38%,
            rgba(56, 55, 53, 1) 39%,
            rgba(68, 67, 66, 1) 40%,
            rgba(56, 55, 53, 1) 41%,
            rgba(87, 77, 76, 1) 42%,
            rgba(87, 77, 76, 1) 44%,
            rgba(113, 110, 103, 1) 46%,
            rgba(113, 110, 103, 1) 48%,
            rgba(113, 98, 93, 1) 49%,
            rgba(113, 98, 93, 1) 51%,
            rgba(122, 115, 105, 1) 52%,
            rgba(113, 98, 93, 1) 53%,
            rgba(113, 98, 93, 1) 54%,
            rgba(122, 115, 105, 1) 55%,
            rgba(106, 99, 89, 1) 56%,
            rgba(106, 99, 89, 1) 58%,
            rgba(79, 76, 76, 0) 60%,
            rgba(65, 64, 70, 1) 61%,
            rgba(65, 64, 70, 1) 62%,
            rgba(90, 85, 89, 1) 63%,
            rgba(78, 74, 73, 1) 65%,
            rgba(78, 73, 74, 1) 67%,
            rgba(78, 73, 74, 0) 68%,
            rgba(78, 73, 75, 1) 69%,
            rgba(78, 73, 75, 1) 70%,
            rgba(78, 73, 76, 0) 71%,
            rgba(77, 72, 76, 0) 72%,
            rgba(24, 19, 25, 0) 100%);
    transform: rotateX(75deg);
    animation: spinRings 30s linear infinite;
}

@keyframes spinRings {
    from {
        transform: rotateX(75deg) rotateZ(0deg);
    }
    to {
        transform: rotateX(75deg) rotateZ(360deg);
    }
}

@keyframes spinSaturn {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>