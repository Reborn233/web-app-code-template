<template>
  <app-page>
    <van-nav-bar title="统计"
                 fixed>
      <template #left>
        <van-icon name="wap-nav"
                  size="25" />
      </template>
    </van-nav-bar>
    <app-section title='线索总览'>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>总台次</th>
            <th>未处理</th>
            <th>跟进中</th>
            <th>流失</th>
            <th>车辆到店</th>
          </tr>
        </thead>
        <tr>
          <td align='center'>9</td>
          <td align='center'>1</td>
          <td align='center'>3</td>
          <td align='center'>2</td>
          <td align='center'>3</td>
        </tr>
      </table>
    </app-section>

    <van-tabs v-model:active="active">
      <van-tab title="平安">平安</van-tab>
      <van-tab title="太平洋">太平洋</van-tab>
      <van-tab title="人保">人保</van-tab>
      <van-tab title="人寿">人寿</van-tab>
    </van-tabs>
  </app-page>
</template>

<script setup lang="ts">
const active = ref(0)
</script>

<style lang="scss" scoped>
</style>
