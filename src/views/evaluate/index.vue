<template>
    <div class="evaluate">
        <div class="title">评价教学</div>
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">教师：</div>
                <div class="content-item-content">
                    <el-select v-model="teacher" placeholder="请选择教师">
                        <el-option v-for="item in teacherList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-title">课程：</div>
                <div class="content-item-content">
                    <el-select v-model="course" placeholder="请选择课程">
                        <el-option v-for="item in courseList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-title">分数：</div>
                <div class="content-item-content">
                    <el-input v-model="score" placeholder="请输入分数" type="number" @input="handleinput"></el-input>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-title">评价：</div>
                <div class="content-item-content">
                    <el-input v-model="evaluate" placeholder="请输入评价"></el-input>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-content">
                    <el-button type="primary">提交</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const teacher = ref('')
const teacherList = ['张三', '李四', '王五', '赵六', '孙七']

const course = ref('')
const courseList = ['语文', '数学', '英语', '物理', '化学']

const score = ref('')
const evaluate = ref('')
const handleinput = (val: string) => {
    if (Number(val) > 100) {
        score.value = '100'
    } else if (Number(val) < 0) {
        score.value = '0'
    } else {
        score.value = val
    }
}
</script>

<style scoped lang="scss">
.evaluate {
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content {
        position: relative;
        width: 600px;
        .content-item {
            display: flex;
            margin-bottom: 20px;
            .content-item-title {
                width: 80px;
                text-align: right;
                margin-right: 20px;
            }
            .content-item-content {
                flex: 1;
            }
        }
        .content-item:last-child {
            position: absolute;
            right: 0;
        }
    }
}
</style>