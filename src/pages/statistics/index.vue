<template>
  <app-page v-loading='loading'>
    <template #navbar>
      <van-nav-bar title="统计">
        <template #left>
          <van-icon name="wap-nav"
                    size="25" />
        </template>
      </van-nav-bar>
      <report-search @query='searchHandler' />
    </template>
    <div class="page-bd">
      <app-section title='线索总览'>
        <clue-table :data='business' />
      </app-section>

      <!-- <van-tabs v-model:active="active">
        <van-tab title="平安">平安</van-tab>
        <van-tab title="太平洋">太平洋</van-tab>
        <van-tab title="人保">人保</van-tab>
        <van-tab title="人寿">人寿</van-tab>
      </van-tabs> -->

      <app-section title='流失原因'>
        <reason-table :data='reason' />
      </app-section>
    </div>
  </app-page>
</template>

<script setup lang="ts">
import { api_queryRepairBusinessReport, api_queryRepairDefeatReport } from '/@/apis/report'
import { calcArraySumBykey } from '/@/utils/calc'
import { getCurrentMonthDays } from '/@/utils/date'
import clueTable from './clue-table.vue'
import reasonTable from './reason-table.vue'
import reportSearch from './report-search.vue'
import { IBusiness } from './model'
import { IDefeatItem } from '/@/apis/report/model'
const loading = ref(false)
let params = {
  startMonth: getCurrentMonthDays()[0],
  endMonth: getCurrentMonthDays()[1]
}
const searchHandler = (data: any) => {
  params = {
    ...params,
    ...data
  }
  queryRepairBusinessReport()
}

// 总览
const business = ref<IBusiness>({
  total: 0,
  waitDistribute: 0,
  following: 0,
  backStore: 0,
  defeat: 0
})
const queryRepairBusinessReport = async () => {
  try {
    const _res = await api_queryRepairBusinessReport(params)
    const data: any[] = _res || []
    business.value.total = calcArraySumBykey(data, 'total')
    business.value.waitDistribute = calcArraySumBykey(data, 'waitDistribute')
    business.value.following = calcArraySumBykey(data, 'following')
    business.value.backStore = calcArraySumBykey(data, 'backStore')
    business.value.defeat = calcArraySumBykey(data, 'defeat')
  }
  catch (error) {

  }
}

// 流失原因
const reason = ref<IDefeatItem[]>([])
const queryRepairDefeatReport = async () => {
  try {
    const _res = await api_queryRepairDefeatReport(params)
    reason.value = _res || []
  } catch (error) {

  }
}

onMounted(async () => {
  loading.value = true
  try {
    Promise.all([
      queryRepairBusinessReport(),
      queryRepairDefeatReport()
    ])
  } catch (error) {

  }
  loading.value = false
})

// const active = ref(0)

</script>

<style lang="scss" scoped>
</style>
