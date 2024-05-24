<template>
    <div class="studentGrade">
        <!-- <div class="header">
            <div class="header-item">
                <div class="header-item-title">学年</div>
                <el-select v-model="year" placeholder="请选择">
                    <el-option v-for="item in yearList" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </div>
            <div class="header-item">
                <div class="header-item-title">学期</div>
                <el-select v-model="semester" placeholder="请选择">
                    <el-option v-for="item in semesterList" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </div>
            <div></div>
        </div> -->
        <div class="content">
            <el-table :data="tableData" style="width: 100%" :row-class-name="rowClassName">
                <el-table-column prop="name" label="课程名称"></el-table-column>
                <!-- <el-table-column prop="credit" label="学分"></el-table-column> -->
                <el-table-column prop="grade" label="成绩"></el-table-column>
                <!-- <el-table-column prop="gradePoint" label="绩点"></el-table-column> -->
                <el-table-column prop="teacher" label="任课老师"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getGrade } from '@/api/grade.ts'
import { useUserStore } from '@/store';

const userStore = useUserStore();

// const year = ref('')
// const yearList = ['2020-2021学年', '2021-2022学年', '2022-2023学年', '2023-2024学年']

// const semester = ref('全部')
// const semesterList = ['全部', '1', '2', '3']

const tableData = ref([])

getGrade({
    student: userStore.userInfo.uid,
}).then(res => {
    if (res.status) {
        tableData.value = res.data;
    }
})

const rowClassName = ({ row }: { row: any; }) => {
    if (row.grade < 60) {
        return 'low-score-row';
    }
    return '';
};

</script>

<style lang="scss">
.studentGrade {
    .header {
        display: flex;
        margin-bottom: 20px;

        .header-item {
            display: flex;
            align-items: center;

            .header-item-title {
                margin-right: 10px;
                width: 80px;
            }

            .el-select {
                width: 200px;
                margin-right: 20px;
            }
        }
    }
    .content {
        .el-table {
            width: 100%;

            .low-score-row {
                color: red;
            }
        }
    }
}
</style>