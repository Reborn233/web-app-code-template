<template>
  <app-page>
    <template #navbar>
      <van-nav-bar>
        <template #left>
          <van-icon name="wap-nav"
                    size="25" />
        </template>
        <template #title>
          <van-dropdown-menu style="height: 40px;">
            <van-dropdown-item v-model="date"
                               teleport='body'
                               :options="dateOptions">
            </van-dropdown-item>
          </van-dropdown-menu>
        </template>
        <template #right>
          <van-icon name="search"
                    size="32" />
        </template>
      </van-nav-bar>
      <van-tabs v-model:active="status">
        <van-tab :title="item.label"
                 v-for="item of statusOptions"
                 :name='item.value'
                 :key="item.value"></van-tab>
      </van-tabs>
    </template>
    <!--  -->
    <van-pull-refresh v-model="refreshing"
                      @refresh="onRefresh">
      <van-list v-model:loading="loading"
                :finished="finished"
                finished-text="到底啦!"
                @load="onLoad">
        <div class="page-bd">
          <app-section :title='`报案号：${item.reportNo}`'
                       v-for="item of clue"
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
              <div>
                <van-icon name="phone"
                          class="van-icon__primary"
                          size="30" />
                <van-icon name="chat"
                          class="van-icon__default"
                          size="30" />
              </div>
              <van-button type="primary"
                          @click="clickRow(item)"
                          size="small">查看</van-button>
            </div>
          </app-section>
        </div>
      </van-list>
    </van-pull-refresh>
  </app-page>
</template>

<script setup lang="ts">
import { api_queryClueOrderList } from "/@/apis/clue"
import { IClue } from "../../apis/clue/model.d"
import type { Ref } from 'vue'
import { useClueStore } from "/@/store/modules/clue"
import { useLoading } from "/@/hooks/useLoading"
import { useRefresh } from "/@/hooks/useRefresh"
import { usePagination } from "/@/hooks/usePagination"
import { CLUE_STATUS } from "/@/enums/dict"
import { CLUE_STATUS_LIST } from "/@/configs"
const router = useRouter()

const { setClue } = useClueStore()
const { loading, finished, stopLoading, finishLoading, resetLoading } = useLoading()
const { refreshing, stopRefreshing, sleep } = useRefresh()

const { buildPageParams, setFirstPage, setNextPage } = usePagination()

const status = ref(CLUE_STATUS.WAIT_ALLOT)
const statusOptions = ref(CLUE_STATUS_LIST)
const date = ref(1)
const dateOptions = [
  { text: '今日', value: 1 },
  { text: '昨日', value: 2 },
  { text: '前日', value: 3 }
]

const clue: Ref<IClue[]> = ref([])

watch(status, (val) => {
  onRefresh()
})

const buildParams = () => {
  return buildPageParams({
    date: date.value,
    status: status.value
  })
}

const onRefresh = async () => {
  setFirstPage()
  const params = buildParams()
  try {
    const _data = await api_queryClueOrderList(params)
    await sleep()
    resetLoading()
    clue.value = _data.resultList || []
    if (clue.value.length >= _data.totalCount) {
      finishLoading()
    }
    else {
      setNextPage()
    }

  } catch (error) {
  }
  stopRefreshing()
}

const onLoad = async () => {
  const params = buildParams()
  try {
    const _data = await api_queryClueOrderList(params)
    const list: IClue[] = _data.resultList || []
    clue.value = [...clue.value, ...list]
    if (clue.value.length >= _data.totalCount) {
      finishLoading()
    }
    else {
      setNextPage()
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
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  @extend .top-line;
  :deep(.van-icon:first-child) {
    margin-right: 30px;
  }
}
:deep(.van-nav-bar__content) {
  display: block;
}
:deep(.van-tabs__line) {
  z-index: 0;
}
</style>
