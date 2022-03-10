<template>
  <div class="app-page"
       :style="{backgroundColor:bgColor}">
    <div class="app-page__navbar"
         v-if="$slots.navbar">
      <slot name="navbar"></slot>
    </div>
    <div class="app-page__panel">
      <div v-if="errorMessage">
        <van-empty image="error"
                   :image-size="200"
                   :description="errorMessage || '未知错误'">
          <a class="app-link"
             style="margin-top: 30px;"
             @click="clickRefresh">刷新</a>
        </van-empty>
      </div>
      <slot v-else></slot>
    </div>
    <div class="app-page__tabbar"
         v-if="$slots.tabbar">
      <slot name="tabbar"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'appPage',
  props: {
    bgColor: {
      type: String,
      default: '#f8f8f8'
    },
    errorMessage: String
  },
  setup(props, context) {

    const clickRefresh = () => {
      context.emit('errorRefresh')
    }

    return {
      clickRefresh
    }
  }
})

</script>

<style lang="scss" scoped>
.app-page {
  position: relative;
  background-color: #f8f8f8;
  font-family: 'PingFangSC Regular';
  box-sizing: border-box;
  height: 100%;
  color: $TEXT-COLOR;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &__navbar {
    position: relative;
    z-index: 500;
    background-color: #fff;
    padding-top: constant(safe-area-inset-top);
    // padding-top: env(safe-area-inset-top);
  }
  &__panel {
    box-sizing: border-box;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__tabbar {
    display: flex;
    position: relative;
    z-index: 500;
    background-color: #fff;
  }
}
</style>
