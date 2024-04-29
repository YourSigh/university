<template>
    <div class="account">
        <div class="title">账号管理</div>
        <div class="content">
            <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
                <el-table-column prop="uid" label="UID" width="180"></el-table-column>
                <el-table-column prop="username" label="用户名" width="180"></el-table-column>
                <el-table-column prop="type" label="用户类型">
                    <template #default="{ row }">
                        {{ row.type == 'student' ? '学生' : row.type == 'teacher' ? '教师' : '管理员' }}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="{ row, $index }">
                        <el-button link @click="handleDelete($index, row)" :disabled="row.type == 'admin'">删除</el-button>
                        <el-button link @click="handleEdit(row)" :disabled="row.type == 'admin'">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination> -->
        </div>
        <el-dialog title="修改" v-model="dialogVisible">
            <el-form :model="formData" :rules="rules" ref="formRef">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="formData.password" type="password" show-password></el-input>
                </el-form-item>
                <el-form-item label="用户类型" props="type">
                    <el-select v-model="formData.type" placeholder="请选择">
                        <el-option label="学生" value="student"></el-option>
                        <el-option label="教师" value="teacher"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeUser">确 定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getUser, deleteUser, changeUserInfo } from '@/api/user';
import { ElMessage, ElForm } from 'element-plus';

const tableData = ref([])
getUser({}).then(res => {
    tableData.value = res.data
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
    formData.value = row;
}

// const handleSizeChange = (val: number) => {
//     pageSize.value = val
// }

// const handleCurrentChange = (val: number) => {
//     currentPage.value = val
// }

const formRef = ref<InstanceType<typeof ElForm> | null>(null);

const formData = ref({
    uid: '',
    username: '',
    password: '',
    type: ''
})

const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ],
    type: [
        { required: true, message: '请选择用户类型', trigger: 'blur' }
    ]
}

const dialogVisible = ref(false);

const changeUser = () => {
    formRef.value?.validate((valid: boolean) => {
        if (valid) {
            changeUserInfo(formData.value).then(res => {
                if (res.status) {
                    ElMessage.success('修改成功');
                    dialogVisible.value = false;
                } else {
                    ElMessage.error('修改失败');
                }
            })
        } else {
            return false;
        }
    })
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
    :deep(.el-dialog__body) {
        padding: 20px;
        .el-form-item {
            margin-bottom: 20px;
            label {
                width: 80px;
            }
        }
    }
}
</style>