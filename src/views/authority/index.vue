<template>
    <div class="authority">
        <loading :loading="isloading"/>
        <div class="title">权限管理</div>
        <div class="content">
            <div class="left">
                <div class="title">角色：</div>
                <el-tree-select
                    v-model="checkedData"
                    :data="data"
                    :props="defaultProps"
                    check-strictly
                    placeholder="请选择"
                    style="width: 100%;"
                    @change="changeRole"
                ></el-tree-select>
            </div>
            <div class="right">
                <div class="title">权限：</div>
                <el-checkbox-group v-model="checkedAuth">
                    <el-checkbox v-for="item in authData" :value="item.id" :key="item.id">{{ item.name }}</el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="footer">
            <el-button type="primary" @click="saveAuth">保存</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import auth from './util/auth'
import { getUser } from '@/api/user';
import { getUserAuthority, setUserAuthority } from '@/api/authority';
import { ElMessage } from 'element-plus';

const authData = ref(auth)
const checkedAuth:any = ref([])
const checkedData = ref('')
const isloading = ref(false)
const userData = ref([])

getUser({}).then(res => {
    userData.value = res.data
})

const data = computed(() => {
    const arr:any = [
        {
            value: 1,
            label: '学生',
            children: []
        },
        {
            value: 2,
            label: '教师',
            children: []
        },
    ];
    arr[0].children = userData.value.filter((item: any) => item.type == 'student').map((item: any) => {
        return {
            value: item.uid,
            label: item.username,
        }
    })
    arr[1].children = userData.value.filter((item: any) => item.type == 'teacher').map((item: any) => {
        return {
            value: item.uid,
            label: item.username,
        }
    })
    return arr;
})

const defaultProps = {
    children: 'children',
    label: 'label'
}

const changeRole = (value: any) => {
    isloading.value = true;
    if (value == '1' || value == '2') {
        checkedAuth.value = [];
        isloading.value = false;
        return;
    }
    getUserAuthority({uid: value}).then((res:any) => {
        const authority = res.data.authority || {};
        checkedAuth.value = Object.keys(authority).filter((key: any) => authority[key]);
        isloading.value = false;
    })
}

const saveAuth = () => {
    if (!checkedData.value) {
        ElMessage.error('请选择角色');
        return;
    }
    isloading.value = true;
    const authority:any = {};
    checkedAuth.value.forEach((item: any) => {
        authority[item] = true;
    })
    let type = 0;
    if (checkedData.value == '1') {
        type = 1;
    } else if (checkedData.value == '2') {
        type = 2;
    }
    setUserAuthority({uid: checkedData.value, authority, type}).then((res) => {
        if (res.status) {
            ElMessage.success('保存成功');
        } else {
            ElMessage.error('保存失败');
        }
        isloading.value = false;
    })
}
</script>

<style scoped lang="scss">
.authority {
    width: 100%;
    height: 100%;
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .content {
        display: flex;
        height: calc(100% - 120px);
        .left {
            width: calc(50% - 40px);
            height: 100%;
            overflow: auto;
            border-right: 1px solid #ccc;
            padding: 0 20px;
            .title {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 10px;
            }
        }
        .right {
            flex: 1;
            width: calc(50% - 40px);
            height: 100%;
            overflow: auto;
            padding: 0 20px;
            .title {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            :deep(.el-checkbox-group) {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
    .footer {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>