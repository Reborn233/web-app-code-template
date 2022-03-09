<template>
  <div class="app-tab">
    <div class="app-tab__panel">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div class="app-tabbar">
      <van-tabbar v-model="active"
                  route
                  :fixed='false'>
        <van-tabbar-item icon="chat-o"
                         to='/message'>消息</van-tabbar-item>
        <van-tabbar-item icon="label-o"
                         to='/clue'>线索管理</van-tabbar-item>
        <van-tabbar-item icon="chart-trending-o"
                         to='/statistics'>统计</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'tabbarView',
  setup() {
    const active = ref(0)
    return {
      active
    }
  }
})
</script>

<style lang="scss" scoped>
.app-tab {
  position: relative;
  height: 100%;
  &__panel {
    box-sizing: border-box;
    height: 100%;
    padding-bottom: 50px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .app-tabbar {
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    background-color: #f7f7fa;
    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #c0bfc4;
      color: #c0bfc4;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}
</style>
