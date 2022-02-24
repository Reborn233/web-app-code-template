<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">
        ￥
        <text class="amount">{{productInfo.orderAmt}}</text>
        /月
      </div>
    </div>
    <div class="app-items">
      <app-section title='订单信息'>
        <app-item label='订单编号'
                  :value='productInfo.orderNo'
                  align='right'></app-item>
        <app-item label='商品名称'
                  :value='productInfo.goodsName'
                  align='right'></app-item>
        <app-item label='商品描述'
                  :value='productInfo.goodsDesc'
                  align='right'></app-item>
      </app-section>
    </div>
    <div class="action">
      <button class="app-button app-button__primary"
              bindtap="clickSubscribe">立即订阅</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, Ref } from 'vue';

interface IGoods {
  productId: number,
  orderNo: string,
  goodsName: string,
  goodsDesc: string,
  orderAmt: number,
  cycleDesc: string
}

const productInfo: IGoods = reactive({
  productId: 3,
  orderNo: 'OD_1641550505984',
  goodsName: '车载87号皮肤',
  goodsDesc: '按月付费套餐-哪吒汽车车载皮肤自然系列',
  orderAmt: 15,
  cycleDesc: '月'
})

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
