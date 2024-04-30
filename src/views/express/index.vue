<template>
    <div class="express">
        <div class="title">快递查询</div>
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">快递单号：</div>
                <div class="content-item-content">
                    <el-input v-model="expressNumber" placeholder="请输入快递单号"></el-input>
                    <el-button type="primary" @click="searchData">查询</el-button>
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
                        <el-table-column prop="status" label="状态" width="180"></el-table-column>
                        <el-table-column prop="kind" label="快递名称" width="180"></el-table-column>
                        <el-table-column prop="time" label="预计送达时间" width="180"></el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getExpress } from '@/api/express'
import { useUserStore } from '@/store';
import { ElMessage } from 'element-plus';

const userStore = useUserStore()

const expressNumber = ref('')

const tableData = ref([])

const searchData = () => {
    getExpress({
        uid: userStore.userInfo.uid,
        id: expressNumber.value,
    }).then(res => {
        if (res.status) {
            ElMessage.success('查询成功');
            tableData.value = res.data;
        } else {
            ElMessage.error('查询失败');
        }
    })
}

searchData();



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