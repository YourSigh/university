<template>
    <div class="express">
        <div class="title">快递查询</div>
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">快递单号：</div>
                <div class="content-item-content">
                    <el-input v-model="expressNumber" placeholder="请输入快递单号"></el-input>
                    <el-button type="primary">查询</el-button>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-content">

                </div>
            </div>
            <div class="content-item">
                <div class="content-item-content">
                    <!-- 快递单号，时间，状态，快递名称，预计送达时间 -->
                    <el-table :data="tableData" style="width: 100%" stripe>
                        <el-table-column prop="id" label="快递单号" width="180"></el-table-column>
                        <el-table-column prop="date" label="时间" width="180"></el-table-column>
                        <el-table-column prop="status" label="状态" width="180"></el-table-column>
                        <el-table-column prop="name" label="快递名称" width="180"></el-table-column>
                        <el-table-column prop="expectedTime" label="预计送达时间" width="180"></el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expressNumber = ref('')

const tableData = [
    { id: '123456', date: '2021-09-01', status: '已签收', name: '顺丰', expectedTime: '2021-09-02' },
    { id: '123457', date: '2021-09-02', status: '运输中', name: '圆通', expectedTime: '2021-09-03' },
    { id: '123458', date: '2021-09-03', status: '已签收', name: '中通', expectedTime: '2021-09-04' },
    { id: '123459', date: '2021-09-04', status: '已签收', name: '申通', expectedTime: '2021-09-05' },
    { id: '123460', date: '2021-09-05', status: '已签收', name: '韵达', expectedTime: '2021-09-06' },
    { id: '123461', date: '2021-09-06', status: '已签收', name: '邮政', expectedTime: '2021-09-07' },
    { id: '123462', date: '2021-09-07', status: '已签收', name: '京东', expectedTime: '2021-09-08' },
    { id: '123463', date: '2021-09-08', status: '已签收', name: '天猫', expectedTime: '2021-09-09' },
    { id: '123464', date: '2021-09-09', status: '已签收', name: '淘宝', expectedTime: '2021-09-10' },
]



</script>

<style scoped lang="scss">
.express {
    width: 100%;
    height: 100%;

    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;

        .content-item {
            display: flex;
            margin: 20px 0;

            .content-item-title {
                font-size: 20px;
                font-weight: bold;
                width: 100px;
                line-height: 32px;
            }

            .content-item-content {
                display: flex;
                align-items: center;

                :deep(.el-input) {
                    width: 200px;
                }

                :deep(.el-button) {
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>