<template>
    <div class="loading" :style="{width: size + 'px', height: size + 'px'}">
        <div class="round" v-for="i in 7" :key="i" :style="{transformOrigin: '50% ' + size / 2 + 'px'}"></div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    size: {
        type: Number,
        default: 150
    }
})
</script>

<style scoped lang="scss">
.loading {
    width: 150px;
    height: 150px;
    position: relative;
}

.round {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    animation: circleRound 3s ease infinite;
    transform-origin: 50% 75px;
    left: 50%;
}

.round:nth-child(1) {
    z-index: 7;
}

.round:nth-child(2) {
    height: 19px;
    width: 19px;
    background-color: orange;
    animation-delay: .2s;
    z-index: 6;
}

.round:nth-child(3) {
    height: 18px;
    width: 18px;
    background-color: yellow;
    animation-delay: .4s;
    z-index: 5;
}

.round:nth-child(4) {
    height: 17px;
    width: 17px;
    background-color: green;
    animation-delay: .6s;
    z-index: 4;
}

.round:nth-child(5) {
    height: 16px;
    width: 16px;
    background-color: cyan;
    animation-delay: .8s;
    z-index: 3;
}

.round:nth-child(6) {
    height: 15px;
    width: 15px;
    background-color: blue;
    animation-delay: 1s;
    z-index: 2;
}

.round:nth-child(7) {
    height: 14px;
    width: 14px;
    background-color: purple;
    animation-delay: 1.2s;
    z-index: 1;
}

@keyframes circleRound {
    to {
        transform: rotate(1turn);
    }
}
</style>