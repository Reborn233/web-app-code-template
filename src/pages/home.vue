<template>
  <div>
    <h1>Home</h1>
    <p>{{user.token}}</p>
    <p>{{user.count}}</p>
    <van-button type="primary"
                @click='toAbout'>go to about</van-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { userStore } from '../store/modules/user'
import { onMounted } from 'vue'

const user = userStore()

const router = useRouter()
const toAbout = () => {
  router.push({ name: 'about', query: { id: 233 } })
}


onMounted(() => {
  console.log('onMounted')
})
</script>

<style lang="scss" scoped>
p {
  background: red;
  width: 375px;
}
</style>
