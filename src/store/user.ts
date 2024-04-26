import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router';
import router from '@/router'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') as string) : {
        uid: '',
        username: '',
        type: '',
        img: '',
    },
  }),
  actions: {
    setUserInfo(data: any) {
        this.userInfo = data;
    },
    clearUserInfo() {
        this.userInfo = {
            uid: '',
            username: '',
            type: '',
            img: '',
        };
    },
  }
})
