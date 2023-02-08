<template>
  <div class="home" ref="homeRef">
    <list-div/>
  </div>
</template>

<script>
  export default { name: "home" }
</script>
<script setup>
import listDiv from '@/components/listDiv/listDiv.vue';
import { ref, watch } from 'vue'
import useHomeStore from '@/stores/modules/home';

import useScroll from '@/hooks/useScroll'

const homeStore = useHomeStore()
homeStore.fetchGetData()

// 监听滚动条滚动到中间
const homeRef = ref()
const { isReachBottom } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (homeStore.currentPage > 5) return
  if (newValue) {
    homeStore.fetchGetData().then(() => {
      isReachBottom.value = false
    })
  }
})

</script>

<style lang="less" scoped>
  .home {
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 5px;
  }
</style>
