<template>
  <div>
    <van-row justify="space-between"
             align='center'
             style="padding:0 12px;">
      <h1>DEMO</h1>
      <van-icon name="plus"
                @click="openPoup"
                size='28' />
    </van-row>
    <van-search v-model="search"
                placeholder="请输入搜索关键词" />
    <van-tabs v-model:active="status">
      <van-tab title="全部"></van-tab>
      <van-tab title="进行中"></van-tab>
      <van-tab title="已完成"></van-tab>
    </van-tabs>
    <van-cell-group>
      <van-cell v-for="(item,index) in computedList"
                :key="item.id"
                @click="changeStatus(item)">
        <template #title>
          <del v-if="item.status === 2">{{index+1}}、{{item.content}}</del>
          <span v-else>{{index+1}}、{{item.content}}</span>
        </template>
      </van-cell>
    </van-cell-group>

    <van-popup v-model:show="show"
               position="bottom"
               :style="{ height: '50%',background:'#f8f8f8' }">
      <van-row justify="end"
               style="padding:12px;">
        <van-icon name="cross"
                  size='28'
                  color="#333"
                  @click="closePoup" />
      </van-row>
      <br />
      <van-cell-group inset>
        <van-field v-model="content"
                   rows="5"
                   autosize
                   type="textarea"
                   maxlength="50"
                   placeholder="请输入内容"
                   show-word-limit />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button block
                    type="primary"
                    @click="save">
          保存
        </van-button>
      </div>
    </van-popup>
  </div>
</template>

<script  lang="ts">

import { useList } from './list'
import { useQuery } from './search'
import { useAdd } from './add'

export default {
  setup() {
    const { list } = useList()

    const { search, computedList, status, changeStatus } = useQuery(list)

    const { show, save, content, openPoup, closePoup } = useAdd(list)

    return {
      list,
      search,
      computedList,
      status,
      changeStatus,
      show,
      save,
      content,
      openPoup,
      closePoup
    }
  }
}

</script>

<style lang="scss" scoped>
.status {
  margin-top: 12px;
  display: flex;
  &-item {
    padding: 5px;
  }
}
</style>
