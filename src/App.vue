<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cacheViews">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts">
const cacheViews = ref([
  'tabbarView'
])
</script>
