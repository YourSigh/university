<template>
    <div class="evaluate">
        <div class="title">评价教学</div>
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">教师：</div>
                <div class="content-item-content">
                    <el-select v-model="teacher" placeholder="请选择教师" @change="changeTeacher">
                        <el-option v-for="item in teacherList" :key="item.teacherId" :label="item.teacher" :value="item.teacherId"></el-option>
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
                    <el-button type="primary" @click="save">提交</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getTeacherClass, setEvaluate } from '@/api/evaluate'
import { useUserStore } from '@/store';
import { ElMessage } from 'element-plus';

const userStore = useUserStore();

const teacherList:any = ref([]);
getTeacherClass({
    uid: userStore.userInfo.uid
}).then((res:any) => {
    teacherList.value = res.data;
})

const teacher = ref('')


const course = ref('')
const courseList:any = ref([])

const changeTeacher = (val: any) => {
    course.value = '';
    courseList.value = teacherList.value.find((i: any) => i.teacherId == val)?.classes;
}

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

const save = () => {
    if (!teacher.value || !course.value || !score.value || !evaluate.value) {
        ElMessage.error('请填写完整信息');
        return;
    }
    setEvaluate({
        teacher: teacher.value,
        student: userStore.userInfo.uid,
        classes: course.value,
        grade: score.value,
        evaluate: evaluate.value,
    }).then((res: any) => {
        if (res.status) {
            ElMessage.success('添加成功');
        } else {
            ElMessage.error(res.message);
        }
    })
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