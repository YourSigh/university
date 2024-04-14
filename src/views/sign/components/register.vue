<template>
    <div class="register">
        <el-form :model="form" :rules="rules" ref="formRef">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password1">
                <el-input v-model="form.password1" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="password2">
                <el-input v-model="form.password2" placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">注册</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElForm } from 'element-plus';

const formRef = ref<InstanceType<typeof ElForm> | null>(null);

const form = ref({
    username: '',
    password1: '',
    password2: '',
})

const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password1: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ],
    password2: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
}

const login = () => {
    formRef.value?.validate((valid: boolean) => {
        if (valid) {
            console.log('注册成功')
        } else {
            console.log('注册失败')
            return false
        }
    })
}

const reset = () => {
    form.value.username = ''
    form.value.password1 = ''
    form.value.password2 = ''
}
</script>

<style scoped lang="scss">
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #fff;

    ::deep .el-form {
        .el-form-item {
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            .el-form-item__label {
                width: 80px;
            }
            .el-form-item__content {
                justify-content: center;
            }
        }
    }
}
</style>