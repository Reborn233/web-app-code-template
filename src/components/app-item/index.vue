<template>
  <div class="app-item">
    <div class="app-item__label"
         :style="styles">{{label}}</div>
    <div class="app-item__value"
         :class="align">{{value}}</div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  label: String,
  value: String,
  labelWidth: {
    type: Number,
    default: 150
  },
  align: {
    type: String,
    validator(val: string): boolean {
      return ['left', 'center', 'right'].indexOf(val) !== -1;
    },
    default: 'left'
  }
})

const instance = getCurrentInstance()
const styles = computed(() => {
  const labelWidth = instance?.parent?.attrs['label-width']
  const width = labelWidth ? labelWidth : instance?.props.labelWidth
  return {
    width: `${width}px`
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
  &.left {
    text-align: left;
  }
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }
}
</style>
