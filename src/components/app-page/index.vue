<template>
  <div class="app-page"
       :style="{backgroundColor:bgColor}">
    <div class="app-page__navbar">
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
  font-size: 16px;
  font-family: 'PingFangSC Regular';
  box-sizing: border-box;
  height: 100%;
  color: $TEXT-COLOR;
  overflow: hidden;

  &__navbar {
    position: absolute;
    z-index: 500;
    top: 0;
    width: 100%;
    background-color: #fafafa;
  }
  &__panel {
    box-sizing: border-box;
    height: 100%;
    padding-bottom: 50px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.app-page__navbar + .app-page__panel {
  padding-top: 50px;
  padding-bottom: 0;
}
</style>
