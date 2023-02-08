import { getHomeDiv } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    bgList: [],
    currentPage: 1
  }),
  actions: {
    async fetchGetData() {
      const listData = await getHomeDiv(10)
      this.bgList.push(...listData)
      this.currentPage++
    }
  }
})

export default useHomeStore

