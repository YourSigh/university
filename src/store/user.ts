import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') as string) : {
      uid: '',
      username: '',
      type: '',
      img: '',
      class: '',
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
        class: '',
      };
    },
  }
})
