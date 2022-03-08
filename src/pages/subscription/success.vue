<template>
  <app-page>
    <div class="success">
      <van-icon class="icon"
                name="checked"
                color='#47cec6'
                size='30' />
      <span>订阅成功！</span>
    </div>
    <div class="tips"
         v-if="isFeeSuccess">
      <p>扣费成功</p>
    </div>
    <div class="tips"
         v-if='nextDeductionDate'>
      预计下次扣费日期: {{nextDeductionDate}}
      <!-- 您可以在“订阅服务”查看订阅详情 -->
    </div>
  </app-page>
</template>

<script setup lang="ts">
import { FEE_STATUS } from "/@/enums/dict"

const route = useRoute()
const nextDeductionDate = ref(route.query.nextDeductionDate)
const deductionStatus = ref(route.query.deductionStatus)

const isFeeSuccess = computed(() => Number(deductionStatus.value) === FEE_STATUS.SUCCESS)

</script>

<style lang="scss" scoped>
.success {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  font-size: 17px;
  .icon {
    margin-right: 5px;
  }
}
.tips {
  color: rgba(0, 0, 0, 0.3);
  font-size: 15px;
  text-align: center;
  margin-top: 15px;
}
</style>
