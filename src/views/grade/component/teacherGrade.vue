<template>
    <div class="teacherGrade">
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">学生：</div>
                <div class="content-item-content">
                    <el-select v-model="student" placeholder="请选择学生" @change="handleStudentSelect">
                        <el-option v-for="item in studentList" :key="item.id" :label="item.username" :value="item.id"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-title">课程：</div>
                <div class="content-item-content">
                    <el-select v-model="course" placeholder="请选择课程">
                        <el-option v-for="item in courseList" :key="item.id" :label="item.name" :value="item.id"></el-option>
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
                    <el-button type="primary" @click="save">提交</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getStudentClass, setGrade } from '@/api/grade.ts'
import { useUserStore } from '@/store';
import { ElMessage } from 'element-plus';

const userStore = useUserStore();

const studentList:any = ref([]);

getStudentClass({
    teacherId: userStore.userInfo.uid,
}).then(res => {
    studentList.value = res.data;
})

const courseList:any = ref([])
const handleStudentSelect = (val: any) => {
    course.value = '';
    courseList.value = studentList.value.find((i: any) => i.id == val)?.classes;
}

const student = ref('')

const course = ref('')

const grade = ref('')

const save = () => {
    if (!student.value || !course.value || !grade.value) {
        ElMessage.error('请填写完整信息');
        return;
    }
    setGrade({
        name: courseList.value.find((i: any) => i.id == course.value)?.name,
        student: student.value,
        teacher: userStore.userInfo.username,
        grade: grade.value,
        classes: course.value,
    }).then(res => {
        if (res.status) {
            ElMessage.success('添加成功');
        } else {
            ElMessage.error('添加失败');
        }
    })
}

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