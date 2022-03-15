<template>
  <app-page>
    <template #navbar>
      <van-nav-bar title="线索详情"
                   left-arrow
                   @click-left="$router.back">
        <template #right>
          <div class="app-link">投保信息</div>
        </template>
      </van-nav-bar>
    </template>
    <app-section :title='clue.plateNo'
                 :label-width='80'
                 class="section">
      <template #right>
        <div class="date">{{dateDiff(clue.createTime)}}</div>
      </template>
      <app-item label='出险地点：'
                :value="clue.reportAddress"></app-item>
      <app-item label='事故描述：'
                :value="clue.reportAddress"></app-item>
      <app-item label='报案人：'
                :value="clue.customerName"></app-item>
      <app-item label='手机号：'
                :value="clue.customerPhone"></app-item>
      <app-item label='报案时间：'
                :value="clue.reportDate"></app-item>
      <app-item label='报案号码：'
                :value="clue.reportNo"></app-item>
    </app-section>
    <!-- 跟进记录 -->
    <app-section title='跟进记录'>
      <follow-record :orderId='clue.id'></follow-record>
    </app-section>

    <template #tabbar>
      <van-row class="action"
               justify="space-between">
        <van-row>
          <div class="icon">
            <van-icon name="phone-o"
                      :size="25" />
            <p>手机</p>
          </div>
          <div class="icon">
            <van-icon name="chat-o"
                      :size="25" />
            <p>短信</p>
          </div>
        </van-row>
        <van-button type='primary'
                    @click="openPopup"
                    class="btn">录入跟进</van-button>
      </van-row>
    </template>

    <!-- 录入跟进 -->
    <van-popup v-model:show="showPopup"
               position="bottom"
               teleport="body"
               :style="{ height: '95%' }">
      <follow-form :orderId='clue.id'
                   @onClose='closePopup'
                   @onSubmit='save'></follow-form>
    </van-popup>
  </app-page>
</template>

<script setup lang="ts">
import { IClue } from "../../apis/clue/model.d"
import { useClueStore } from "/@/store/modules/clue"
import { getDateDiff } from "/@/utils/date"
import followRecord from './components/follow-record.vue'
import followForm from './components/follow-form.vue'
import { useFollowForm } from "./useFollowForm"

const { getClue } = useClueStore()
const clue = ref<IClue>({
  id: 1,
  merchantId: 1895,
  message: "【太平洋保险】返修推荐至文洋闵行荣威:荣威CSA6468NEAQ多用途乘用车川Y69Z11出险情况：LS093995  标的车：川Y69Z11有损，碰撞（取车时发现车辆受损），非现报案号C310100VEH21310836报案人：何超联系电话：18228857114出险地址：上海市闵行区颛桥镇<太平洋产险> 回TD退订短信",
  customerName: "沈小明",
  customerPhone: "15000000001",
  plateNo: "沪A12345",
  brandName: "法拉利",
  carStatus: 10351001,
  repairStatus: 10331001,
  insCode: "picc",
  orderSource: 10341001,
  reportNo: "202203021437",
  reportDate: "2022-03-02 15:15:15",
  reportAddress: "上海市闵行区颛桥镇",
  userId: null,
  status: 0,
  creator: 3359,
  createTime: "2022-03-02 14:38:49",
  modifier: null,
  updateTime: null
})

const dateDiff = (date: string) => {
  return getDateDiff(date)
}
const { showPopup, openPopup, closePopup, save } = useFollowForm()

</script>

<style lang="scss" scoped>
.date {
  color: $TEXT-COLOR-0;
}
.section {
  margin-top: 12px;
  font-size: 15px;
}
.action {
  width: 100%;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  .btn {
    width: 200px;
  }
  .icon {
    width: 50px;
    font-size: 13px;
  }
}
</style>
