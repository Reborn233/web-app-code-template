<template>
  <van-row class="action">
    <van-col :span="9">
      <app-select type='date'
                  placeholder="开始日期"
                  value-format="YYYY-MM-DD"
                  v-model="startMonth"></app-select>
    </van-col>
    <van-col :span="2"
             class="line">至</van-col>
    <van-col :span="9">
      <app-select type='date'
                  placeholder="结束日期"
                  value-format="YYYY-MM-DD"
                  v-model="endMonth"></app-select>
    </van-col>
    <van-col :span="4">
      <van-button type="primary"
                  class="full-width"
                  @click="query">查询</van-button>
    </van-col>
  </van-row>
</template>

<script lang="ts">
import { useSearch } from './useSearch'

export default defineComponent({
  name: 'search',
  emits: ['query'],
  setup(props, ctx) {
    const { startMonth, endMonth } = useSearch()

    const query = () => {
      ctx.emit('query', {
        startMonth: startMonth.value,
        endMonth: endMonth.value
      })

    }
    return {
      startMonth,
      endMonth,
      query
    }
  }
})

</script>

<style lang="scss" scoped>
.line {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
