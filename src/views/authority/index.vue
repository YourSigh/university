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
            <el-button type="primary">保存</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import auth from './util/auth'

const authData = ref(auth)
const checkedAuth = ref([])
const checkedData = ref([])
const isloading = ref(false)

const data = ref([
    {
        value: 1,
        label: '学生',
        children: [
            {
                value: 3,
                label: '张三',
            },
            {
                value: 4,
                label: '李四'
            }
        ]
    },
    {
        value: 2,
        label: '教师',
        children: [
            {
                value: 5,
                label: '王老师'
            },
            {
                value: 6,
                label: '李老师'
            }
        ]
    },
])

const defaultProps = {
    children: 'children',
    label: 'label'
}

const changeRole = (value: any) => {
    isloading.value = true;
    setTimeout(() => {
        checkedData.value = value;
        isloading.value = false;
    }, 1000)
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