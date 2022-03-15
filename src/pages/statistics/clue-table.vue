<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>总台次</th>
        <th>未处理</th>
        <th>跟进中</th>
        <th>流失</th>
        <th>车辆到店</th>
      </tr>
    </thead>
    <tr>
      <td align='center'>{{data.total}}</td>
      <td align='center'>{{data.waitDistribute}}</td>
      <td align='center'>{{data.following}}</td>
      <td align='center'>{{data.defeat}}</td>
      <td align='center'>{{data.backStore}}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { IBusiness } from "./model"

export default defineComponent({
  props: {
    data: {
      type: Object as () => IBusiness,
      default() {
        return {}
      }
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
