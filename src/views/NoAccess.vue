<template>
    <div class="no-access">
        <div class="no-access-content">
            <div class="no-access-content-title">无权限访问</div>
            <div class="no-access-content-text">请联系管理员开通权限</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.no-access {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .no-access-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .no-access-content-title {
            font-size: 24px;
        }
        .no-access-content-text {
            font-size: 16px;
        }
    }
}
</style>