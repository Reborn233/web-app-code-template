<template>
  <app-page ref="page"
            v-loading='loading'
            :error-message='errorMessage'
            @errorRefresh='query'>
    <div class="page__hd">
      <div class="page__title">
        ￥
        <text class="amount">{{goods.productPrice}}</text>
        /月
      </div>
    </div>
    <div class="app-items">
      <app-section title='订单信息'>
        <app-item label='订单编号'
                  :label-width="100"
                  :value='goods.reqNo'
                  align='right'></app-item>
        <app-item label='商品名称'
                  :label-width="100"
                  :value='goods.productName'
                  align='right'></app-item>
        <app-item label='商品描述'
                  :label-width="100"
                  :value='goods.productDesc'
                  align='right'></app-item>
      </app-section>
    </div>
    <div class="action">
      <button class="app-button app-button__primary"
              @click="next">立即订阅</button>
    </div>

    <!--  -->
    <van-popup v-model:show="show"
               position="bottom">
      <van-radio-group v-model="channel"
                       class="channelgroup">
        <van-cell-group inset
                        v-for="item of channels"
                        :key="item.channel">
          <van-cell :title="item.channel_name"
                    clickable
                    @click="clickChannel(item.channel)">
            <template #right-icon>
              <van-radio :name="item.channel" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-popup>
  </app-page>
</template>

<script setup lang="ts">
import { useGoods } from './query'
import { useChannel } from './useChannel'
import { CHANNEL_TYPE } from '/@/enums/dict'

const route = useRoute()
const router = useRouter()
const { goods, loading, errorMessage, queryGoodsById } = useGoods()


const id = Number(route.params.id)

const query = () => {
  id && queryGoodsById(id)
}
onMounted(() => {
  query()
})

const { show, channel, channels, getSubscribeProductChannel } = useChannel()

const next = () => {
  getSubscribeProductChannel(id, (channel: number) => {
    clickChannel(channel)
  })
}

const clickChannel = (channel: number) => {
  if (channel === CHANNEL_TYPE.TL) {
    router.push({
      name: 'subscription',
      params: {
        id: id
      },
      query: {
        channel: channel
      }
    })
  }
  else {
    aliPaySign()
  }
}

const aliPaySign = () => {
  console.log('支付宝签约')
}


</script>

<style lang="scss" scoped>
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

.channelgroup {
  margin: 20px 0;
}
</style>
