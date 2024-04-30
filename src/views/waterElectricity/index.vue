<template>
    <div class="waterElectricity">
        <div class="title">水电查询</div>
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">月份：</div>
                <div class="content-item-content">
                    <el-date-picker
                        v-model="date"
                        type="month"
                        placeholder="选择月"
                        style="width: 100%;"
                        format="YYYY-MM"
                        value-format="YYYY-MM"
                    ></el-date-picker>
                    <el-button type="primary" @click="searchData">查询</el-button>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-content">
                    <el-table
                        :data="tableData"
                        stripe
                    >
                        <el-table-column
                            prop="date"
                            label="日期"
                            width="180"
                        ></el-table-column>
                        <el-table-column
                            prop="water"
                            label="水费"
                            width="180"
                        ></el-table-column>
                        <el-table-column
                            prop="electricity"
                            label="电费"
                            width="180"
                        ></el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { getWaterElectricity } from '@/api/waterElectricity'
import { useUserStore } from '@/store';

const userStore = useUserStore()

const date = ref('')

const tableData = ref([]);

const searchData = () => {
    getWaterElectricity({
        uid: userStore.userInfo.uid,
        date: date.value,
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
.waterElectricity {
    width: 100%;
    height: 100%;

    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content {
        width: 50%;
        position: relative;
        .content-item {
            display: flex;

            .content-item-title {
                width: 80px;
                text-align: right;
                line-height: 40px;
            }

            .content-item-content {
                flex: 1;
                margin-left: 20px;
                :deep(.el-date-editor) {
                    width: 200px !important;
                }

                :deep(.el-button) {
                    margin-left: 20px;
                }

                :deep(.el-table) {
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>