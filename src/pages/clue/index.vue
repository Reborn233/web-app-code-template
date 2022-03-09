<template>

  <app-page enableRefresh
            @onRefresh='onRefresh'>
    <template #navbar>
      <van-nav-bar>
        <template #left>
          <van-icon name="wap-nav"
                    size="25" />
        </template>
        <template #title>
          <div>
            <van-dropdown-menu style="height: 40px;">
              <van-dropdown-item v-model="date"
                                 :options="dateOptions" />
            </van-dropdown-menu>
          </div>
        </template>
        <template #right>
          <van-icon name="search"
                    size="32" />
        </template>
      </van-nav-bar>
    </template>
    <van-pull-refresh v-model="refreshing"
                      @refresh="onRefresh">
      <van-list v-model:loading="loading"
                :finished="finished"
                finished-text="到底啦!"
                @load="queryData">
        <div style="margin-top: 12px;">
          <app-section :title='`报案号：${item.reportNo}`'
                       v-for="item of clue"
                       @click="clickRow(item)"
                       :key="item.id">
            <app-item label='报案人'
                      :label-width="75"
                      :value='item.customerName'></app-item>
            <app-item label='车牌号'
                      :label-width="75"
                      :value='item.plateNo'></app-item>
            <app-item label='报案时间'
                      :label-width="75"
                      :value='item.reportDate'></app-item>
            <app-item label='出险地点'
                      :label-width="75"
                      :value='item.reportAddress'></app-item>
            <div class="action">
              <van-icon name="phone"
                        class="van-icon__primary"
                        size="32" />
              <van-icon name="chat"
                        class="van-icon__default"
                        size="32" />
            </div>
          </app-section>
        </div>
      </van-list>
    </van-pull-refresh>
  </app-page>
</template>

<script setup lang="ts">
import { api_queryClueOrderList } from "/@/apis/clue"
import { IClue } from "/@/apis/clue/mode"
import type { Ref } from 'vue'
import { useClueStore } from "/@/store/modules/clue"
import { useLoading } from "/@/hooks/useLoading"
import { useRefresh } from "/@/hooks/useRefresh"
import { usePagination } from "/@/hooks/usePagination"

const router = useRouter()

const { setClue } = useClueStore()
const { loading, finished, stopLoading, finishLoading, resetLoading } = useLoading()
const { refreshing, stopRefreshing } = useRefresh()

const { buildPageParams, setFirstPage, setNextPage } = usePagination()

const date = ref(1)
const dateOptions = [
  { text: '今日', value: 1 },
  { text: '昨日', value: 2 },
  { text: '前日', value: 3 }
]

const clue: Ref<IClue[]> = ref([])

const onRefresh = async () => {
  setFirstPage()
  const params = buildPageParams({
    date: date.value
  })
  console.log(params)
  try {
    const _data = await api_queryClueOrderList(params)
    setTimeout(() => {
      clue.value = _data.resultList || []
      stopRefreshing()
      if (clue.value.length >= _data.totalCount) {
        finishLoading()
      }
      else {
        setNextPage()
        stopLoading()
      }
    }, 1000)
  } catch (error) {
  }
  resetLoading()
}

const queryData = async () => {
  const params = buildPageParams({
    date: date.value
  })
  console.log(params)
  try {
    const _data = await api_queryClueOrderList(params)
    const list: IClue[] = _data.resultList || []
    clue.value = [...clue.value, ...list]
    if (clue.value.length >= _data.totalCount) {
      finishLoading()
    }
    else {
      setNextPage()
      stopLoading()
    }
  } catch (error) {

  }
}

const clickRow = (item: IClue) => {
  if (!item.id) return
  setClue(item)
  router.push(`/clue/${item.id}`)
}

</script>

<style lang="scss" scoped>
.action {
  padding: 12px;
  text-align: right;
  :deep(.van-icon:first-child) {
    margin-right: 30px;
  }
}
:deep(.van-nav-bar__content) {
  display: block;
}
</style>
