<template>
    <div class="teacherGrade">
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">学生：</div>
                <div class="content-item-content">
                    <el-select v-model="student" placeholder="请选择学生">
                        <el-option v-for="item in studentList" :key="item" :label="item" :value="item"></el-option>
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
                <div class="content-item-title">成绩：</div>
                <div class="content-item-content">
                    <el-input v-model="grade" placeholder="请输入成绩" type="number" @input="handleinput"></el-input>
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

const student = ref('')
const studentList = ['张三', '李四', '王五', '赵六', '孙七']

const course = ref('')
const courseList = ['语文', '数学', '英语', '物理', '化学']

const grade = ref('')

const handleinput = (val: string) => {
    if (Number(val) > 100) {
        grade.value = '100'
    } else if (Number(val) < 0) {
        grade.value = '0'
    } else {
        grade.value = val
    }
}

</script>

<style lang="scss">
.teacherGrade {
    .content {
        display: flex;
        align-items: center;
        .content-item {
            display: flex;
            margin-bottom: 20px;

            .content-item-title {
                width: 80px;
                text-align: right;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            .content-item-content {
                width: 200px;
                margin-left: 20px;
            }
        }
    }
    .footer {
        margin-top: 20px;
    }
}
</style>