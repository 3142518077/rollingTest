<template>
  <template v-for="(item, index) in bgList" :key="index">
    <div :style="item">{{index + 1}}</div>
  </template>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/modules/home';

const homeStore = useHomeStore()
const { bgList } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
  div {
    width: 100%;
    height: 500px;
    font-size: 25px;
    text-align: center;
  }
</style>
