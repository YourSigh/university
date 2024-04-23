<template>
    <div class="lostFound">
        <div class="title">失物招领</div>
        <div class="content">
            <div class="content-left">
                <el-table :data="tableData" style="width: 100%" stripe>
                    <el-table-column prop="id" label="编号" width="180"></el-table-column>
                    <el-table-column prop="name" label="物品名称" width="180"></el-table-column>
                    <el-table-column prop="time" label="丢失时间" width="180"></el-table-column>
                    <el-table-column prop="place" label="丢失地点" width="180"></el-table-column>
                    <el-table-column prop="status" label="状态" width="180"></el-table-column>
                    <el-table-column prop="operation" label="操作" width="180">
                        <template #default="{ row }">
                            <el-button type="primary" @click="handleApply(row)">申领</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="content-right">
                <div class="content-item">
                    <div class="content-item-title">物品名称：</div>
                    <div class="content-item-content">
                        <el-input v-model="name" placeholder="请输入物品名称"></el-input>
                    </div>
                </div>
                <div class="content-item">
                    <div class="content-item-title">丢失时间：</div>
                    <div class="content-item-content">
                        <el-date-picker v-model="time" type="date" placeholder="选择日期"></el-date-picker>
                    </div>
                </div>
                <div class="content-item">
                    <div class="content-item-title">丢失地点：</div>
                    <div class="content-item-content">
                        <el-input v-model="place" placeholder="请输入丢失地点"></el-input>
                    </div>
                </div>
                <div class="content-item">
                    <div class="content-item-content">
                    <el-button type="primary" @click="handlePublish">发布</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
    { id: '1', name: '钱包', time: '2021-09-01', place: '教室', status: '未申领' },
    { id: '2', name: '手机', time: '2021-09-02', place: '操场', status: '未申领' },
    { id: '3', name: '书包', time: '2021-09-03', place: '食堂', status: '未申领' },
    { id: '4', name: '水杯', time: '2021-09-04', place: '图书馆', status: '未申领' },
    { id: '5', name: '钥匙', time: '2021-09-05', place: '宿舍', status: '未申领' },
])

const name = ref('')

const time = ref('')

const place = ref('')

const handleApply = (row: any) => {
    row.status = '已申领'
}

const handlePublish = () => {
    tableData.value.push({
        id: String(tableData.value.length + 1),
        name: name.value,
        time: time.value,
        place: place.value,
        status: '未申领'
    })
    name.value = ''
    time.value = ''
    place.value = ''
}

</script>

<style scoped lang="scss">
.lostFound {
    width: 100%;
    height: 100%;

    .title {
        font-size: 20px;
    }

    .content {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        height: 100%;

        .content-left {
            width: 48%;
            padding: 20px;
            border-right: 1px solid #ccc;
        }

        .content-right {
            width: 48%;

            .content-item {
                display: flex;
                margin-top: 20px;

                .content-item-title {
                    width: 100px;
                    text-align: right;
                }

                .content-item-content {
                    flex: 1;
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>