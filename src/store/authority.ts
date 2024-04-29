import { defineStore } from 'pinia'
import { getUserAuthority } from '@/api/authority';
import { useUserStore } from './user';
import defaultData from '@/views/menu/util/menuData'

const userStore = useUserStore();

export const useAuthorityStore = defineStore('authority', {
  state: () => ({
    authority: [],
  }),
  actions: {
    setAuthority(data: any) {
        this.authority = data;
    },
    getAuthorityList() {
        getUserAuthority({ uid: userStore.userInfo.uid }).then((res: any) => {
            if (res.status) {
                const data = defaultData;
                data.forEach((item: any) => {
                    Object.keys(res.data).forEach((key: any) => {
                        if (item.index === '/' + key) {
                            item.show = res.data[key];
                        }
                    });
                });
                this.setAuthority(data);
            }
        });
    }
  }
})
