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
                    ></el-date-picker>
                    <el-button type="primary">查询</el-button>
                </div>
            </div>
            <div class="content-item">
                <div class="content-item-content">
                    <el-table
                        :data="tableData"
                        style="width: 100%"
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

const date = ref('')

const tableData = ref([
    { date: '2021-09-01', water: '100', electricity: '200' },
    { date: '2021-09-02', water: '100', electricity: '200' },
    { date: '2021-09-03', water: '100', electricity: '200' },
    { date: '2021-09-04', water: '100', electricity: '200' },
    { date: '2021-09-05', water: '100', electricity: '200' },
    { date: '2021-09-06', water: '100', electricity: '200' },
    { date: '2021-09-07', water: '100', electricity: '200' },
    { date: '2021-09-08', water: '100', electricity: '200' },
    { date: '2021-09-09', water: '100', electricity: '200' },
    { date: '2021-09-10', water: '100', electricity: '200' },
    { date: '2021-09-11', water: '100', electricity: '200' },
    { date: '2021-09-12', water: '100', electricity: '200' },
    { date: '2021-09-13', water: '100', electricity: '200' },
    { date: '2021-09-14', water: '100', electricity: '200' },
    { date: '2021-09-15', water: '100', electricity: '200' },
    { date: '2021-09-16', water: '100', electricity: '200' },
    { date: '2021-09-17', water: '100', electricity: '200' },
    { date: '2021-09-18', water: '100', electricity: '200' },
    { date: '2021-09-19', water: '100', electricity: '200' },
    { date: '2021-09-20', water: '100', electricity: '200' },
    { date: '2021-09-21', water: '100', electricity: '200' },
]);
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
                    width: 100%;
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>