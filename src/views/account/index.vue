<template>
    <div class="account">
        <div class="title">账号管理</div>
        <div class="content">
            <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
                <el-table-column prop="uid" label="UID" width="180"></el-table-column>
                <el-table-column prop="username" label="用户名" width="180"></el-table-column>
                <el-table-column prop="type" label="用户类型"></el-table-column>
                <el-table-column label="操作">
                    <template #default="{ row, $index }">
                        <el-button link @click="handleDelete($index, row)" :disabled="row.type == '管理员'">删除</el-button>
                        <el-button link @click="handleEdit(row)" :disabled="row.type == '管理员'">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination> -->
        </div>
        <el-dialog title="修改" v-model="dialogVisible">
            11111
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getUser, deleteUser } from '@/api/user';
import { ElMessage } from 'element-plus';

const tableData = ref([])
getUser({}).then(res => {
    tableData.value = res.data
    tableData.value.forEach((item: any) => {
        item.type = (() => {
            return item.type == 'student' ? '学生' : item.type == 'teacher' ? '教师' : '管理员'
        })()
    })
})

const currentPage = ref(1)
const pageSize = ref(10)

const handleDelete = (index: number, row: any) => {
    deleteUser({ uid: row.uid }).then(res => {
        if (res.status) {
            ElMessage.success('删除成功')
            tableData.value.splice(index, 1);
        } else {
            ElMessage.error('删除失败')
        }
    })
}

const handleEdit = (row: any) => {
    dialogVisible.value = true;
}

const handleSizeChange = (val: number) => {
    pageSize.value = val
}

const handleCurrentChange = (val: number) => {
    currentPage.value = val
}

const dialogVisible = ref(false)


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