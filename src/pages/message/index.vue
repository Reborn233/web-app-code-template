<template>
  <app-page>
    <template #navbar>
      <van-nav-bar title="消息" />
    </template>
    <message-list :data='list'></message-list>
  </app-page>
</template>
<script setup lang="ts">
import messageList from './message-list.vue'
import { useUserStore } from '/@/store/modules/user'

const userStore = useUserStore()
console.log(userStore.getUserInfo)
const list = ref([
  {
    id: 1,
    type: '出险通知',
    plateNo: '京NX2500',
    brand: '（梅赛德斯-奔驰BJ6466G4EA）多少的撒娇克拉斯捡垃圾',
    date: '2022-03-09 15:34:15'
  },
  {
    id: 2,
    type: '超时通知',
    plateNo: '京A131456',
    brand: '（奔驰BENZML350越野车）已多少的撒娇克拉斯捡垃圾',
    date: '2022-03-09 11:12:11'
  },
  {
    id: 3,
    type: '超时通知',
    plateNo: '京A131456',
    brand: '（奔驰BENZML350越野车）已多少的撒娇克拉斯捡垃圾',
    date: '2022-03-09 07:25:15'
  },
  {
    id: 4,
    type: '超时通知',
    plateNo: '京A131456',
    brand: '（奔驰BENZML350越野车）已多少的撒娇克拉斯捡垃圾',
    date: '2022-03-08 15:34:15'
  },
  {
    id: 5,
    type: '超时通知',
    plateNo: '京A131456',
    brand: '（奔驰BENZML350越野车）已多少的撒娇克拉斯捡垃圾',
    date: '2022-03-04 15:34:15'
  }
])
</script>
