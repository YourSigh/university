<template>
    <div class="setting">
        <div class="title">设置</div>
        <div class="content">
            <div class="left">
                <div class="headshot">
                    <img src="https://yoursigh.top/music-img/10001.png" alt="头像">
                </div>
                <div class="username">
                    <span>用户名：</span>
                    <span v-if="!isShowChangeName" @click="showChangeName">{{ userStore.userInfo.username
                        }}</span>
                    <i v-if="!isShowChangeName" class="iconfont icon-chengji" @click="showChangeName"></i>
                    <el-input v-if="isShowChangeName" v-model="username" @blur="changeName" width="10" ref="changeNameRef"></el-input>
                </div>
                <div class="uid">
                    <span>账号：</span>
                    <span>{{ userStore.userInfo.uid }}</span>

                </div>
            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
import { ref } from 'vue';
import { changeUsername } from '@/api/user';
import { ElMessage } from 'element-plus'

const userStore = useUserStore();

const isShowChangeName = ref(false);

const username = ref(userStore.userInfo.username);

const changeNameRef:any = ref(null);

const showChangeName = () => {
    isShowChangeName.value = true;
    setTimeout(() => {
        changeNameRef.value?.focus();
    }, 0)
}

const changeName = () => {
    isShowChangeName.value = false;
    changeUsername({
        uid: userStore.userInfo.uid,
        username: username.value,
    }).then(res => {
        if (res) {
            ElMessage.success('修改用户名成功！');
            const storage = JSON.parse(localStorage.getItem('userInfo') || '');
            storage.username = username.value;
            localStorage.setItem('userInfo', JSON.stringify(storage));
            userStore.setUserInfo({
                uid: userStore.userInfo.uid,
                username: username.value,
                type: userStore.userInfo.type,
                img: userStore.userInfo.img,
                class: userStore.userInfo.class,
            })
        }
    })
}

</script>

<style lang="scss" scoped>
.setting {
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content {
        display: flex;
        height: calc(100% - 90px);

        .left {
            flex: 1;
            height: 100%;
            background-color: var(--system-color);
            color: var(--font-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;

            .headshot {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .username,
            .uid {
                height: 30px;
                line-height: 30px;
                margin-top: 20px;

                span {
                    font-size: 16px;
                    margin-right: 10px;
                }
            }

            .username {
                :deep(.el-input) {
                    width: 90px;
                    // height: 30px;
                }
            }
        }

        .right {
            flex: 2;
        }
    }
}
</style>