<template>
  <div class="page">
    <van-pull-refresh v-if="enableRefresh"
                      v-model="refreshing"
                      v-bind="refreshOtpion"
                      style="min-height: 100%;"
                      @refresh="onRefresh">
      <van-list v-if="enableLoading"
                v-model:loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
        <slot></slot>
      </van-list>
      <slot v-else></slot>
    </van-pull-refresh>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import { PullRefresh } from 'vant';
export default defineComponent({
  name: 'appPage',
  component: [PullRefresh],
  emits: ['onRefresh', 'onLoad'],
  props: {
    enableRefresh: Boolean,
    enableLoading: Boolean,
    refreshOtpion: Object,
    loadingOtpion: Object
  },
  setup(props, context) {
    const refreshing = ref(false)
    const loading = ref(false)
    const finished = ref(false)

    const onRefresh = () => {
      context.emit('onRefresh')
    }

    const stopRefreshing = () => refreshing.value = false

    const onLoad = () => {
      context.emit('onLoad')
    }

    const stopLoading = () => loading.value = false

    const resetLoading = () => {
      loading.value = false
      finished.value = false
    }

    const finishLoading = () => {
      loading.value = false
      finished.value = true
    }

    return {
      refreshOtpion: props.refreshOtpion,
      refreshing,
      onRefresh,
      stopRefreshing,
      loading,
      finished,
      onLoad,
      stopLoading,
      resetLoading,
      finishLoading
    }
  }
})

</script>

<style lang="scss" scoped>
.page {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
