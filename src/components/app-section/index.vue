<template>
  <div class="app-section">
    <div class="app-section__hd">
      <div class="app-section__title">{{title}}</div>
      <div class="app-section__right">
        <slot name='right'></slot>
      </div>
    </div>
    <div class="app-section__bd">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String
})
</script>

<style lang="scss" scoped>
.app-section {
  padding: 0 12px;
  padding-left: 0;
}
.app-section__hd {
  position: relative;
  padding: 8px 12px;
  overflow: hidden;
}
.app-section__hd::before {
  content: ' ';
  position: absolute;
  top: 12px;
  bottom: 12px;
  left: 0;
  width: 3px;
  background-color: $PRIMARY;
}
.app-section__hd::after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid $TEXT-COLOR-2;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
  z-index: 2;
}

.app-section__title {
  float: left;
  color: $TEXT-COLOR;
}

.app-section__right {
  float: right;
}
.app-section__bd {
  padding-left: 12px;
  padding-top: 12px;
}
</style>
