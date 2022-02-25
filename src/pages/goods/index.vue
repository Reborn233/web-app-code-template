<template>
  <div class="page"
       v-loading='loading'>
    <div class="page__hd">
      <div class="page__title">
        ￥
        <text class="amount">{{goods.orderAmt}}</text>
        /月
      </div>
    </div>
    <div class="app-items">
      <app-section title='订单信息'>
        <app-item label='订单编号'
                  :value='goods.orderNo'
                  align='right'></app-item>
        <app-item label='商品名称'
                  :value='goods.goodsName'
                  align='right'></app-item>
        <app-item label='商品描述'
                  :value='goods.goodsDesc'
                  align='right'></app-item>
      </app-section>
    </div>
    <div class="action">
      <button class="app-button app-button__primary"
              @click="clickBtn">立即订阅</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGoods } from './query'
import { useMessage } from '/@/hooks/useMessage'
const { goods, loading, queryGoodsById } = useGoods()

const { Dialog } = useMessage()

const clickBtn = () => {
  queryGoodsById(1)
  Dialog.confirm({
    title: '标题',
    message: '代码是写出来给人看的，附带能在机器上运行。',
  })
}

</script>

<style lang="scss" scoped>
.page {
  background-color: #fff;
}
.page__title {
  text-align: center;
  font-size: 36px;
  width: 150px;
  margin: auto;
}
.amount {
  font-family: 'Segoe UI';
}

.action {
  margin-top: 175px;
  text-align: center;
}
</style>
