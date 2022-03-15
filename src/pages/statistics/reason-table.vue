<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>流失原因</th>
        <th>台次</th>
      </tr>
    </thead>
    <tr v-for="(item,index) in data"
        :key="index">
      <td align='center'>{{formatLossReason(item.clueStatus)}}</td>
      <td align='center'>{{item.defeatCount}}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { IDefeatItem } from "/@/apis/report/model.d"
import { formatterLossReason } from "/@/configs/formatter"

export default defineComponent({
  props: {
    data: {
      type: Array as () => IDefeatItem[],
      default() {
        return []
      }
    }
  },
  setup() {
    const formatLossReason = (value: number) => {
      return formatterLossReason(value)
    }
    return {
      formatLossReason
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
