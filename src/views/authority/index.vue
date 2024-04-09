<template>
    <div class="authority">
        <div class="title">权限管理</div>
        <div class="content">
            <div class="left">
                <el-tree
                    :data="data"
                    :props="defaultProps"
                    @node-click="handleNodeClick"
                    ref="tree"
                    :default-expanded-keys="['0-0-0']"
                    :expand-on-click-node="false"
                ></el-tree>
            </div>
            <div class="right">
                <el-checkbox-group v-model="checkedData">
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
const checkedData = ref([])

const data = ref([
    {
        id: 1,
        label: '学生',
        children: [
            {
                id: 3,
                label: '张三',
            },
            {
                id: 4,
                label: '李四'
            }
        ]
    },
    {
        id: 2,
        label: '教师',
        children: [
            {
                id: 5,
                label: '王老师'
            },
            {
                id: 6,
                label: '李老师'
            }
        ]
    },
])

const defaultProps = {
    children: 'children',
    label: 'label'
}

const handleNodeClick = (data: any) => {
    console.log(data)
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
        .left {
            width: 300px;
            height: 500px;
            overflow: auto;
            margin-left: 0px;

        }
        .right {
            flex: 1;
            height: 500px;
            overflow: auto;
        }
    }
}
</style>