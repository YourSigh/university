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
                <addClassComponent :times="times" :clickNode="clickNode" @add-class="addClasses"></addClassComponent>
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
import addClassComponent from './components/addClass.vue'
import { useUserStore } from '@/store/index'
import { getClass, addClass, changeClass } from '@/api/class'
import { ElMessage } from 'element-plus'

const userStore = useUserStore()

const DateMap:any = {
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
    7: '星期日',
}

getClass({
    class: userStore.userInfo.class,
    userId: userStore.userInfo.uid,
}).then(res => {
    res.data.forEach((item: any) => {
        times.value.forEach((time, index) => {
            if (item.start === time.start) {
                schedule.value[item.week - 1][index] = {
                    id: item.id,
                    name: item.name,
                    teacher: item.teacher,
                    classroom: item.classroom,
                    time: `${DateMap[item.week]} ${time.start}-${time.end}`,
                    type: item.type,
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

const changeClassDetail = (isShow: boolean, i: number, j: number) => {
    isShowClassDetail.value = isShow;
    clickNode.value = { i, j }
    detailData.value = schedule.value[i - 1][j - 1]
}

const addClasses = (data: any) => {
    if (!data.name || !data.week || !data.time || !data.teacher || !data.classroom || !data.class) {
        ElMessage.error('请填写完整信息');
        return;
    }
    if (schedule.value[data.week - 1][data.time].name) {
        if (schedule.value[data.week - 1][data.time].type === 'official') {
            ElMessage.error('该时间段已有课程');
        } else {
            changeClass({
                id: schedule.value[data.week - 1][data.time].id,
                name: data.name,
                week: data.week,
                start: times.value[data.time].start,
                end: times.value[data.time].end,
                teacher: data.teacher,
                classroom: data.classroom,
                classes: data.class,
                type: 'custom',
                userId: userStore.userInfo.uid,
            }).then((res: any) => {
                if (res.status) {
                    schedule.value[data.week - 1][data.time] = {
                        id: res.data.id,
                        name: data.name,
                        teacher: data.teacher,
                        classroom: data.classroom,
                        time: `星期${data.week} ${times.value[data.time].start}-${times.value[data.time].end}`,
                        type: 'custom',
                    }
                    ElMessage.success('修改自定义课程成功！');
                } else {
                    ElMessage.error(res?.message);
                }
            })
        }
    } else {
        addClass({
            name: data.name,
            week: data.week,
            start: times.value[data.time].start,
            end: times.value[data.time].end,
            teacher: data.teacher,
            classroom: data.classroom,
            classes: data.class,
            type: 'custom',
            userId: userStore.userInfo.uid,
        }).then(res => {
            if (res.status) {
                schedule.value[data.week - 1][data.time] = {
                    id: res.data.id,
                    name: data.name,
                    teacher: data.teacher,
                    classroom: data.classroom,
                    time: `星期${data.week} ${times.value[data.time].start}-${times.value[data.time].end}`,
                    type: 'custom',
                }
                ElMessage.success('添加自定义课程成功！');
            }
        })
    }
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