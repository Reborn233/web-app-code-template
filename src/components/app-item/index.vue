<template>
  <div class="app-item">
    <div class="app-item__label"
         :style="{width: `${labelWidth}px`}">{{label}}</div>
    <div class="app-item__value">{{value}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'appItem',
  props: {
    label: String,
    value: String,
    labelWidth: {
      type: Number,
      default: 150
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  setup(props, { emit }) {

    return {}
  }
})
</script>

<style lang="scss" scoped>
.app-item {
  overflow: hidden;
  line-height: 2;
}

.app-item__label {
  float: left;
  width: 75px;
  margin-right: 12px;
  color: $TEXT-COLOR-0;
}

.app-item__value {
  display: block;
  overflow: hidden;
  word-break: normal;
  word-wrap: break-word;
  color: $TEXT-COLOR;
}
</style>
