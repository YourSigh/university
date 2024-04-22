<template>
    <div class="gradeManage">
        <div class="title">成绩管理</div>
        <div class="content">
            <div v-if="userType == 'student'">
                <studentGrade></studentGrade>
            </div>
            <div v-else>
                <teacherGrade></teacherGrade>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import studentGrade from './component/studentGrade.vue'
import teacherGrade from './component/teacherGrade.vue'

const userType = ref('student')
</script>

<style scoped lang="scss">
.gradeManage {
    width: 100%;
    height: 100%;

    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
}
</style>