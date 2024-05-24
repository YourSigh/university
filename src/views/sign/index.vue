<template>
    <div class="sign">
        <div class="content-left">
            <div class="title">欢迎使用大学校园一站式服务平台</div>
            <!-- <ring :size="200"></ring> -->
            <img src="/logo.png" alt="">
        </div>

        <div class="content-right">
            <div class="star"></div>
            <div class="content-right-sign">
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
@use "sass:math";

@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

@function shadowSet($n, $size) {
    $shadow : 0 0 0 0 #fff;
    @for $i from 0 through $n {
        $x: randomNum(2000);
        $y: randomNum(1000);
        $scale: math.div(randomNum($size), 10);
        $shadow: $shadow, #{$x}px #{$y}px 0 #{$scale}px rgba(255, 255, 255, .8);
    }
    @return $shadow;
}

@mixin star {
    width: 8px;
    height: 150px;
    transform: rotate(45deg);
    position: absolute;
}

@mixin starBefore {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    filter: blur(1.8px);
    bottom: -6px;
    left: 50%;
    transform: translate(-50%);
}

.sign {
    height: 100vh;
    width: 100vw;
    // background-color: var(--system-color);
    // background: linear-gradient(45deg, pink, #409eff);
    background: black;
    // background: linear-gradient(45deg, pink, #409eff);
    background-size: 400% 400%;
    position: relative;
    animation: gradientBG 15s ease infinite;
    overflow: hidden;
    display: flex;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 1px;
        border-radius: 50%;
        box-shadow: shadowSet(800, 10);
    }

    .content-left {
        height: 100%;
        width: 50%;
        background: linear-gradient(45deg, pink, #409eff);

        .title {
            font-size: 40px;
            font-weight: bold;
            background: linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            // margin: 50px 100px;
            width: 100%;
            text-align: center;
            height: 200px;
            line-height: 200px;
        }

        .ring {
            margin: 0 auto;
        }

        img {
            width: 200px;
            height: 200px;
            display: block;
            margin: 0px auto;
        }
    }

    .content-right {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 50%;
        height: 100%;
        // background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
        // background: linear-gradient(45deg, pink, #409eff);
        position: relative;

        .content-right-sign {
            width: 350px;
            height: 400px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;

            .sign-title {
                width: 300px;
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
                width: 300px;
                height: 300px;
                border-radius: 0 0 8px 8px;
                z-index: 1;
                overflow: hidden;
                position: absolute;
                top: 75px;
            }
        }

        .content-right-sign::before {
            content: '';
            width: 800px;
            height: 800px;
            display: block;
            border-radius: 10px;
            margin: -400px;
            animation: circleRound 3s linear infinite;
            background: linear-gradient(45deg, pink, #409eff);
        }
    }
}

.star {
    @include star;
    background: linear-gradient(0deg, #409eff 0, transparent 100%);
    animation: shank 2s linear infinite;
    left: 400px;
    top: 0;
}

.star::before {
    @include starBefore;
    background: #409eff;
}

// 背景图动画
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

// 登陆框旋转动画
@keyframes circleRound {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes shank {
    0% {
        transform: rotate(45deg) translateY(0) scale(0.5);
        opacity: 0;
    }

    30% {
        opacity: 1;
        transform: rotate(45deg) translateY(100px) scale(1.1);
    }

    70% {
        opacity: 1;
        transform: rotate(45deg) translateY(400px) scale(1.1);
    }

    100% {
        transform: rotate(45deg) translateY(600px) scale(0.5);
        opacity: 0;
    }
}
</style>