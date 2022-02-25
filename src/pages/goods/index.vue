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
import { Ref } from 'vue'
import { api_queryGoodsById } from '/@/apis/goods'
import { IGoods } from '/@/apis/goods/mode'

const loading = ref(false)
const goods: Ref<IGoods> = ref({
  productId: 0,
  orderNo: '',
  goodsName: '',
  goodsDesc: '',
  orderAmt: 0,
  cycleDesc: ''
})

const queryGoods = async (id: number) => {
  try {
    loading.value = true
    const _goods = await api_queryGoodsById(id)
    goods.value = _goods
  } catch (error) {

  }
  loading.value = false
}

onMounted(() => {
  queryGoods(1)
})

const clickBtn = () => {
  queryGoods(1)
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
