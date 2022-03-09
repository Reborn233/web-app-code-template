<template>
  <app-page>
    <template #navbar>
      <van-nav-bar :title="title"
                   left-arrow
                   @click-left="$router.back">
      </van-nav-bar>
    </template>
    <h1>线索详情</h1>
    <pre>{{getClue}}</pre>
  </app-page>
</template>

<script setup lang="ts">
import { useClueStore } from "/@/store/modules/clue";

const { getClue } = useClueStore()

const title = computed(() => getClue?.customerName)

</script>

<style lang="scss" scoped>
</style>
