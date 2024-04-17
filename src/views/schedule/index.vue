<template>
    <div class="schedule">
        <div class="title">课表管理</div>
        <div class="content">
            <div class="left">
                <classComponent @changeClassDetail="changeClassDetail" :times="times" :schedule="schedule">
                </classComponent>
                <classDetail :isShowClassDetail="isShowClassDetail"></classDetail>
            </div>
            <div class="right">
                <div class="right-title">添加课程</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import * as time from './util/time'
import * as classInterface from './util/interface'
import classComponent from './components/class.vue'
import classDetail from './components/classDetail.vue'

const isSummer = computed(() => {
    const now = new Date()
    const month = now.getMonth()
    return month >= 5 && month < 10
})

const schedule = ref<Array<Array<classInterface.ClassScheduleItem>>>(Array.from({ length: 7 }, () => Array.from({ length: 10 }, () => ({}))));

const times = computed(() => {
    return isSummer.value ? time.summerTime : time.winterTime;
})

schedule.value[0][0] = {
    name: '语文',
    teacher: '张三',
    classroom: '教室1',
    time: '星期一 8:00-9:00'
}

const isShowClassDetail = ref(false)

const clickNode = ref({})

const changeClassDetail = (isShow: boolean, i:number, j:number) => {
    isShowClassDetail.value = isShow;
    clickNode.value = {i, j}
}

</script>

<style scoped lang="scss">
.schedule {
    width: 100%;
    height: 100%;

    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content {
        display: flex;

        .left {
            width: 50%;
            min-width: 600px;
            border-right: 1px solid #ebeef5;
        }

        .right {
            padding: 0 20px;
            .right-title {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 20px;
            }
        }
    }
}
</style>