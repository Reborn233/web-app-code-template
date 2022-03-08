<template>
  <app-page ref="page"
            v-title='title'
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
      <button v-if='showSignBtn'
              class="app-button app-button__primary"
              @click="next">立即订阅</button>
      <button v-else
              disabled
              class="app-button app-button__primary">该产品{{showSignStatusText}}</button>
    </div>

    <!--  -->
    <van-popup v-model:show="show"
               position="bottom">
      <van-radio-group v-model="channel"
                       class="channelgroup">
        <van-cell-group inset
                        v-for="item of channels"
                        :key="item.channel">
          <van-cell :title="item.channelName"
                    clickable
                    @click="clickChannel(item.channel)">
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
import { useMessage } from '/@/hooks/useMessage'
import { isWeChat } from '/@/utils/navigator'

const route = useRoute()
const router = useRouter()
const { showSignBtn, showSignStatusText, goods, loading, errorMessage, queryGoodsById, aliPaySign } = useGoods()
const { Toast } = useMessage()

const id = Number(route.params.id)

const title = computed(() => goods.value.productName)

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
  show.value = false
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
    if (isWeChat()) {
      Toast.fail('请使用自带浏览器或支付宝打开此页面!')
      return
    }
    aliPaySign(id)
  }
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
  margin-top: 150px;
  text-align: center;
}

.channelgroup {
  margin: 20px 0;
}
</style>
