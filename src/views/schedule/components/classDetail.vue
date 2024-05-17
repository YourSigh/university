<template>
    <div class="class-detail" v-if="isShowClassDetail">
        <div class="title">课程详情</div>
        <div class="content">
            <div class="name">
                <div class="label">课程名称：</div>
                <div class="value">{{ detailData.name }}</div>
            </div>
            <div class="teacher">
                <div class="label">任课老师：</div>
                <div class="value">{{ detailData.teacher }}</div>
            </div>
            <div class="classroom">
                <div class="label">上课地点：</div>
                <div class="value">{{ detailData.classroom }}</div>
            </div>
            <div class="time">
                <div class="label">上课时间：</div>
                <div class="value">{{ detailData.time }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    isShowClassDetail: boolean,
    detailData: Record<string, any>
}>()
</script>

<style scoped lang="scss">
.class-detail {
    margin-top: 20px;
    border: 1px solid #ebeef5;
    padding: 20px;
    width: 540px;

    .title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        div {
            display: flex;
        }
    }
}
</style>