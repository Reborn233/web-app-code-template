<template>
  <div>
    <h1>About</h1>
    <p>{{id}}</p>
    <p>{{user.count}}</p>
    <van-button @click="user.increment">+</van-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { userStore } from '../store/modules/user'
const route = useRoute()
const user = userStore()

let id: number = Number(route.query.id)

</script>
