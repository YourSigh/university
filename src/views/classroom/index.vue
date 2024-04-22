<template>
    <div class="classroom">
        <div class="title">空教室预约</div>
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">教室：</div>
                <div class="content-item-content">
                    <el-select v-model="classroom" placeholder="请选择教室">
                        <el-option v-for="item in classroomList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-title">时间：</div>
                <div class="content-item-content">
                    <el-date-picker v-model="date" type="date" placeholder="选择日期">
                    </el-date-picker>
                    <el-time-picker v-model="time" placeholder="选择时间">
                    </el-time-picker>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-title">用途：</div>
                <div class="content-item-content">
                    <el-input v-model="purpose" placeholder="请输入用途"></el-input>
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

const classroom = ref('')

const classroomList = ['101', '102', '103', '104', '105']

const date = ref('')
const time = ref('')
const purpose = ref('')
</script>

<style scoped lang="scss">
.classroom {
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
            width: 560px;

            .content-item-title {
                width: 80px;
                text-align: right;
                margin-right: 20px;
            }

            .content-item-content {
                flex: 1;

                :deep(.el-input):first-child {
                    margin-right: 20px;
                }
            }
        }

        .content-item:last-child {
            width: 100px;
            position: absolute;
            right: 0;
        }
    }
}
</style>