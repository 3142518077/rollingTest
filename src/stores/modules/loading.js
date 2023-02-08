import { defineStore } from "pinia"; 

const useLoadingStore = defineStore("loadingStore", {
  state: () => ({
    notLoading: false
  })
})

export default useLoadingStore
