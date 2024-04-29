<template>
    <div class="lostFound">
        <div class="title">失物招领</div>
        <div class="content">
            <div class="content-left">
                <el-table :data="tableData" style="width: 100%" stripe>
                    <el-table-column prop="id" label="编号" width="180"></el-table-column>
                    <el-table-column prop="name" label="物品名称" width="180"></el-table-column>
                    <el-table-column prop="time" label="拾取时间" width="180"></el-table-column>
                    <el-table-column prop="place" label="拾取地点" width="180"></el-table-column>
                    <el-table-column prop="status" label="状态" width="180"></el-table-column>
                    <el-table-column prop="uid" label="申领人UID" width="180">
                        <template #default="{ row }">
                            {{ row.uid ? row.uid : '暂无'  }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="operation" label="操作" width="180">
                        <template #default="{ row }">
                            <el-button link @click="handleApply(row)" :disabled="row.status == '已申领'">申领</el-button>
                            <el-button link @click="handleDelete(row)" v-if="userInfo.type == 'admin'">删除</el-button>
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
                    <div class="content-item-title">拾取时间：</div>
                    <div class="content-item-content">
                        <el-date-picker v-model="time" type="date" placeholder="选择日期" format="YYYY/MM/DD" value-format="YYYY-MM-DD"></el-date-picker>
                    </div>
                </div>
                <div class="content-item">
                    <div class="content-item-title">拾取地点：</div>
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
import { getLost, addLost, deleteLost } from '@/api/lost'
import { useUserStore } from '@/store';
import { ElMessage } from 'element-plus'

const userStore = useUserStore()

const tableData:any = ref([])
getLost({}).then(res => {
    tableData.value = res.data
});

const name = ref('')

const time = ref('')

const place = ref('')

const userInfo = userStore.userInfo

const handleApply = (row: any) => {
    row.status = '已申领'
    row.uid = userInfo.uid
}

const handlePublish = () => {
    if (!name.value || !time.value || !place.value) {
        ElMessage.error('请填写完整信息')
        return
    }
    addLost({
        name: name.value,
        time: time.value,
        place: place.value,
    }).then(res => {
        if (res.status) {
            tableData.value.push(res.data);
            ElMessage.success('发布成功')
        } else {
            ElMessage.error('发布失败')
        }
    })
    name.value = ''
    time.value = ''
    place.value = ''
}

const handleDelete = (row: any) => {
    deleteLost({
        id: row.id
    }).then(res => {
        if (res.status) {
            tableData.value = tableData.value.filter((item: any) => item.id !== row.id)
            ElMessage.success('删除成功')
        } else {
            ElMessage.error('删除失败')
        }
    })
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