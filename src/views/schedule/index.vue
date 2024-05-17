<template>
    <div class="schedule">
        <div class="title">课表管理</div>
        <div class="content">
            <div class="left">
                <classComponent @changeClassDetail="changeClassDetail" :times="times" :schedule="schedule">
                </classComponent>
                <classDetail :isShowClassDetail="isShowClassDetail" :detailData="detailData"></classDetail>
            </div>
            <div class="right">
                <addClass :times="times" :clickNode="clickNode"></addClass>
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
import addClass from './components/addClass.vue'
import { useUserStore } from '@/store/index'
import { getClass } from '@/api/class'

const userStore = useUserStore()

getClass({class: userStore.userInfo.class}).then(res => {
    res.data.forEach((item:any) => {
        times.value.forEach((time, index) => {
            if (item.start === time.start) {
                schedule.value[item.week - 1][index] = {
                    name: item.name,
                    teacher: item.teacher,
                    classroom: item.classroom,
                    time: `星期${item.week} ${time.start}-${time.end}`
                }
            }
        })
    })
});

const isSummer = computed(() => {
    const now = new Date()
    const month = now.getMonth()
    return month >= 5 && month < 10
})

const schedule = ref<Array<Array<classInterface.ClassScheduleItem>>>(Array.from({ length: 7 }, () => Array.from({ length: 10 }, () => ({}))));

const times = computed(() => {
    return isSummer.value ? time.summerTime : time.winterTime;
})

const isShowClassDetail = ref(false)

const clickNode = ref({})
const detailData = ref({})

const changeClassDetail = (isShow: boolean, i:number, j:number) => {
    isShowClassDetail.value = isShow;
    clickNode.value = {i, j}
    detailData.value = schedule.value[i - 1][j - 1]
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
        }
    }
}
</style>