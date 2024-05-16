<template>
    <div class="course">
        <div class="title">课程管理</div>
        <div class="content">
            <div class="title">添加课程</div>
            <div class="content-item">
                <div class="item-title">课程名称</div>
                <el-input v-model="form.name" placeholder="请输入课程名称"></el-input>
            </div>
            <div class="content-item">
                <div class="item-title">星期</div>
                <el-select v-model="form.week" placeholder="请选择星期">
                    <el-option v-for="i in 7" :key="i" :label="`星期${i}`" :value="i"></el-option>
                </el-select>
            </div>
            <div class="content-item">
                <div class="item-title">时间</div>
                <el-select v-model="form.time" placeholder="请选择时间">
                    <el-option v-for="time in times" :key="time.start" :label="time.start + '-' + time.end"
                        :value="time.start"></el-option>
                </el-select>
            </div>
            <div class="content-item">
                <div class="item-title">课程地点</div>
                <el-select v-model=form.place placeholder="请选择授课地点">
                    <el-option v-for="i in place" :key="i" :label="i" :value="i"></el-option>
                </el-select>
            </div>
            <div class="content-item">
                <div class="item-title">授课班级</div>
                <el-select v-model="form.class" placeholder="请选择授课班级">
                    <el-option v-for="i in classes" :key="i" :label="i" :value="i"></el-option>
                </el-select>
            </div>
        </div>
        <div class="footer">
            <el-button type="primary" @click="save">添加</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import * as time from '@/views/schedule/util/time.ts'
import { addClass } from '@/api/class.ts'
import { useUserStore } from '@/store';

const userStore = useUserStore();

const isSummer = computed(() => {
    const now = new Date()
    const month = now.getMonth()
    return month >= 5 && month < 10
})

const times = computed(() => {
    return isSummer.value ? time.summerTime : time.winterTime;
})

const form = ref({
    name: '',
    week: '',
    time: '',
    place: '',
    class: '',
})

const place = [
    11101,
    11102,
]

const classes = [
    20130405,
    20130401,
]

const save = () => {
    addClass({
        name: form.value.name,
        week: form.value.week,
        start: form.value.time,
        end: times.value.find(time => time?.start === form.value?.time)?.end,
        teacher: userStore.userInfo.uid,
        classroom: form.value.place,
        classes: form.value.class,
    }).then(res => {
        console.log(res)
        form.value = {
            name: '',
            week: '',
            time: '',
            place: '',
            class: '',
        }
    })
}

</script>

<style scoped lang="scss">
.course {
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content {
        .title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .content-item {
            margin-bottom: 10px;
            display: flex;
            align-items: center;

            .item-title {
                width: 100px;
                text-align: right;
                margin-right: 10px;
            }

            .el-input,
            .el-select,
            .el-time-picker {
                flex: 1;
            }
        }
    }

    .footer {
        margin-top: 20px;
        text-align: center;
    }
}
</style>