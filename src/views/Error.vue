<template>
    <div class="error">
        <div class="error-content">
            <div class="error-content-title">404</div>
            <div class="error-content-text">页面不存在</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.error {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .error-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .error-content-title {
            font-size: 24px;
        }
        .error-content-text {
            font-size: 16px;
        }
    }
}
</style>