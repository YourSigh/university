import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router';
import router from '@/router'

export const useTagsStore = defineStore('tags', {
  state: () => ({
    tagsList: [] as RouteLocationNormalized[],
    collapse: true
  }),
  actions: {
    delTagsItem(index: number) {
      this.tagsList.splice(index, 1)
    },
    setTagsItem(data: RouteLocationNormalized) {
      this.tagsList.push(data)
    },
    clearTags() {
      this.tagsList = []
    },
    closeTagsOther(tags: RouteLocationNormalized[]) {
      this.tagsList = tags
    },
    closeCurrentTag(currentPath: string) {
      let index = this.tagsList.findIndex(tag => tag.path === currentPath)
      if (index !== -1) {
        if (index < this.tagsList.length - 1) {
          router.push(this.tagsList[index + 1].path || '/')
        } else if (index > 0) {
          router.push(this.tagsList[index - 1].path || '/')
        } else {
          router.push('/')
        }
        this.tagsList.splice(index, 1)
      }
    },
    handleCollapse(data: boolean) {
      this.collapse = data
    }
  }
})
