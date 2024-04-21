<template>
    <div class="addClass">
        <div class="add-title">添加课程</div>
        <div class="add-item">
            <div class="add-item-title">请选择星期</div>
            <el-select placeholder="请选择" v-model="week">
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
            <el-select placeholder="请选择" v-model="time">
                <el-option v-for="(time, item) in times" :label="time.start + '-' + time.end" :value="item"></el-option>
            </el-select>
        </div>
        <div class="add-item">
            <div class="add-item-title">课程名称</div>
            <el-input placeholder="请输入课程名称"></el-input>
        </div>
        <div class="add-item">
            <div class="add-item-title">任课老师</div>
            <el-input placeholder="请输入任课老师"></el-input>
        </div>
        <div class="add-item">
            <div class="add-item-title">上课地点</div>
            <el-input placeholder="请输入上课地点"></el-input>
        </div>
        <div class="add-footer">
            <el-button>添加</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
    times: Array<{ start: string, end: string }>,
    clickNode: {
        type: Object,
        default: () => ({})
    }
})

const week = ref()
const time = ref()

watch(() => props.clickNode, () => {
    week.value = props.clickNode.i
    time.value = props.clickNode.j - 1
})

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