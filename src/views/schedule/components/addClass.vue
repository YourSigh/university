<template>
    <div class="addClass">
        <div class="add-title">添加课程</div>
        <div class="add-item">
            <div class="add-item-title">请选择星期</div>
            <el-select placeholder="请选择" v-model="form.week">
                <el-option label="星期一" :value=1></el-option>
                <el-option label="星期二" :value=2></el-option>
                <el-option label="星期三" :value=3></el-option>
                <el-option label="星期四" :value=4></el-option>
                <el-option label="星期五" :value=5></el-option>
                <el-option label="星期六" :value=6></el-option>
                <el-option label="星期日" :value=7></el-option>
            </el-select>
        </div>
        <div class="add-item">
            <div class="add-item-title">请选择时间</div>
            <el-select placeholder="请选择" v-model="form.time">
                <el-option v-for="(time, item) in times" :label="time.start + '-' + time.end" :value="item"></el-option>
            </el-select>
        </div>
        <div class="add-item">
            <div class="add-item-title">课程名称</div>
            <el-input placeholder="请输入课程名称" v-model="form.name"></el-input>
        </div>
        <div class="add-item">
            <div class="add-item-title">任课老师</div>
            <el-select placeholder="请选择任课老师" v-model="form.teacher">
                <el-option v-for="item in teacher" :label="item.username" :value="item.uid"></el-option>
            </el-select>
        </div>
        <div class="add-item">
            <div class="add-item-title">上课地点</div>
            <el-input placeholder="请输入上课地点" v-model="form.classroom"></el-input>
        </div>
        <div class="add-footer">
            <el-button @click="save">添加</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { getTeacher } from '@/api/user';

const props = defineProps({
    times: Array<{ start: string, end: string }>,
    clickNode: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits<{
    (event: 'addClass', value: any): void
}>()

const teacher:any = ref([])
getTeacher({}).then(res => {
    if (res.status) {
        teacher.value = res.data;
    }
})

interface Form {
    week: string,
    time: number | null,
    name: string,
    teacher: string,
    classroom: string
}

const form = ref<Form>({
    week: '',
    time: null,
    name: '',
    teacher: '',
    classroom: ''
})

watch(() => props.clickNode, () => {
    form.value.week = props.clickNode.i
    form.value.time = props.clickNode.j - 1
})

const save = () => {
    emit('addClass', form.value);
}

</script>

<style lang="scss">
.addClass {
    min-width: 300px;
    position: relative;
    height: 100%;

    .add-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .add-item {
        margin-bottom: 20px;

        .add-item-title {
            margin-bottom: 10px;
        }
    }
}
</style>