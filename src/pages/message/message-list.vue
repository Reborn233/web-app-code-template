<template>
  <div class="message">
    <div class="message-item"
         v-for="item of data"
         :key="item.id">
      <div class="message-item__image">
        <div class="circle">
          <van-icon name="bell"
                    size='28'
                    color="#fff" />
        </div>
      </div>
      <div class="message-item__content">
        <div class="row">
          <div class="type">{{item.type}}</div>
          <div class="date">{{item.date}}</div>
        </div>
        <div class="row">
          <div class="desc">{{item.plateNo}} {{item.brand}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    data: {
      type: Array as () => any[],
      default: () => []
    }
  }
})
</script>

<style lang="scss" scoped>
.message {
  position: relative;
  &-item {
    display: flex;
    padding: 12px 15px;
    padding-left: 0;
    background-color: #fff;
    @extend .bottom-line;

    .message-item__image {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      .circle {
        width: 48px;
        height: 48px;
        background: $ERROR-COLOR;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
    }
    .message-item__content {
      font-size: 15px;
      .row {
        color: #333;
        display: flex;
        justify-content: space-between;
        &:first-child {
          margin-bottom: 10px;
        }
      }
      .date {
        color: $TEXT-COLOR-0;
      }
      .desc {
        font-size: 13px;
        color: #666;
      }
    }
  }
}
</style>
