import { defineStore } from 'pinia'

export const useAuthorityStore = defineStore('authority', {
  state: () => ({
    authority: [],
  }),
  actions: {
    setAuthority(data: any) {
        this.authority = data;
    },
  }
})
