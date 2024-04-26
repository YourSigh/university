<template>
    <div class="login">
        <el-form :model="form" :rules="rules" ref="formRef">
            <el-form-item label="UID" prop="uid">
                <el-input v-model="form.uid" placeholder="请输入UID"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="signIn">登录</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElForm, ElMessage } from 'element-plus';
import router from '@/router';
import { login } from '@/api/user';
import { useUserStore } from '@/store';

const userStore = useUserStore();

const formRef = ref<InstanceType<typeof ElForm> | null>(null);

const form = ref({
    uid: '',
    password: ''
})

const rules = {
    uid: [
        { required: true, message: '请输入UID', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
}

const signIn = () => {
    formRef.value?.validate((valid: boolean) => {
        if (valid) {
            login({
                uid: form.value.uid,
                password: form.value.password
            }).then(res => {
                if (res.status) {
                    localStorage.setItem('loginToken', res.data.uid);
                    localStorage.setItem('userInfo', JSON.stringify(res.data));
                    userStore.setUserInfo({
                        uid: res.data.uid,
                        username: res.data.username,
                        type: res.data.type,
                        img: res.data.img,
                    })
                    ElMessage.success('登录成功');
                    router.push('/');
                } else {
                    ElMessage.error('UID不存在或密码错误');
                }
            })
        } else {
            ElMessage.error('登录失败');
            return false
        }
    })
}

const reset = () => {
    form.value.uid = ''
    form.value.password = ''
}
</script>

<style scoped lang="scss">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #fff;

    :deep(.el-form) {
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