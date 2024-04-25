<template>
    <div class="sign">
        <div class="content-left">
            <div class="title">欢迎使用大学校园一站式服务平台</div>
            <ring :size="220"></ring>
            <img src="/logo.png" alt="">
            <!-- <div class="saturn">
                <span class="rings"></span>
            </div> -->
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
@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function shadowSet($n, $size) {
    $shadow : 0 0 0 0 #fff;
    
    @for $i from 0 through $n { 
        $x: randomNum(2000);
        $y: randomNum(1000);
        $scale: randomNum($size) / 10;
        
        $shadow: $shadow, #{$x}px #{$y}px 0 #{$scale}px rgba(255, 255, 255, .8);
    }
    
    @return $shadow;
}

.sign {
    height: 100vh;
    width: 100vw;
    // background-color: var(--system-color);
    // background: linear-gradient(45deg, pink, #409eff);
    background: black;
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
        min-width: 350px;
        height: 400px;
        // background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
        border-radius: 10px;
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

    .content-right::before {
        content: '';
        width: 800px;
        height: 800px;
        border-radius: 10px;
        margin: -400px;
        animation: circleRound 3s linear infinite;
        // background-image: radial-gradient(circle at center, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
        // background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
        background: linear-gradient(45deg, pink, #409eff);
    }
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