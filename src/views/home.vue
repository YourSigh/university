<template>
    <div class="home">
        <div class="home-content">
            <div class="home-content-title">Home</div>
            <div class="home-content-text">欢迎使用大学校园一站式服务平台</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .home-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .home-content-title {
            font-size: 24px;
        }
        .home-content-text {
            font-size: 16px;
        }
    }
}
</style>