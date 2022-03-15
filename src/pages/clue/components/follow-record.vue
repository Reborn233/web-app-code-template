<template>
  <div>
    <p v-if="loading"
       class="loading">加载中...</p>
    <van-steps direction="vertical"
               :active="0">
      <van-step v-for="item of followList"
                :key="item.id">
        <p>{{item.followTime}}</p>
        <div>{{item.userName}}</div>
        <div>{{item.remark}}</div>
      </van-step>
      <p class="loading"
         v-if="!loading && followList.length === 0">暂无跟进记录...</p>
    </van-steps>
  </div>
</template>

<script lang="ts">
import { api_queryFollowList } from '/@/apis/clue'
import { IFollowItem } from '../../../apis/clue/model.d'

export default defineComponent({
  props: {
    orderId: [String, Number]
  },
  setup(prop, ctx) {
    const loading = ref(false)
    const followList = ref<IFollowItem[]>([])

    const queryFollowList = async () => {
      const orderId = prop.orderId
      if (!orderId) return
      loading.value = true
      try {
        const _data = await api_queryFollowList(orderId)
        followList.value = _data || []
      } catch (error) {

      }
      loading.value = false
    }

    onMounted(() => {
      queryFollowList()
    })

    return {
      loading,
      followList,
      queryFollowList
    }
  }
})

</script>

<style lang="scss" scoped>
.loading {
  text-align: center;
  font-size: 13px;
  color: $TEXT-COLOR-1;
}
</style>
