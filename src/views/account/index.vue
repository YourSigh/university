<template>
    <div class="account">
        <div class="title">账号管理</div>
        <div class="content">
            <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column label="操作">
                    <template #default="{ row, $index }">
                        <el-button type="text" @click="handleDelete($index, row)">删除</el-button>
                        <el-button type="text" @click="handleAction(row)" :disabled="row.disabled">禁用</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
    { date: '2021-09-01', name: '张三', address: '北京市朝阳区' },
    { date: '2021-09-02', name: '李四', address: '上海市浦东新区' },
    { date: '2021-09-03', name: '王五', address: '广州市天河区' },
    { date: '2021-09-04', name: '赵六', address: '深圳市南山区' },
    { date: '2021-09-05', name: '孙七', address: '杭州市西湖区' },
    { date: '2021-09-06', name: '周八', address: '成都市锦江区' },
    { date: '2021-09-07', name: '吴九', address: '重庆市渝中区' },
    { date: '2021-09-08', name: '郑十', address: '武汉市洪山区' },
    { date: '2021-09-09', name: '钱十一', address: '南京市鼓楼区' },
    { date: '2021-09-10', name: '孙十二', address: '苏州市姑苏区' },
])

const currentPage = ref(1)
const pageSize = ref(10)

const handleDelete = (index: number, row: any) => {
    tableData.value.splice(index, 1)
}

const handleAction = (row: any) => {
    row.disabled = !row.disabled
}

const handleSizeChange = (val: number) => {
    pageSize.value = val
}

const handleCurrentChange = (val: number) => {
    currentPage.value = val
}


</script>

<style scoped lang="scss">
.account {
    width: 100%;
    height: 100%;

    .title {
        font-size: 20px;
    }

    .content {
        .el-table {
            margin-top: 20px;
        }
    }
}
</style>