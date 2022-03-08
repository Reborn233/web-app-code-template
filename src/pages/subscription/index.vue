<template>
  <app-page v-title='`订阅`'>
    <van-cell-group style="margin-top: 50px;">
      <van-field v-model="form.accountNo"
                 label="银行卡"
                 required
                 placeholder='请输入银行卡' />
      <van-field v-model="form.id"
                 label="身份证"
                 required
                 placeholder='请输入身份证' />
      <van-field v-model="form.accountName"
                 label="姓名"
                 required
                 placeholder='请输入姓名' />
      <van-field v-model="form.tel"
                 type="tel"
                 required
                 placeholder='手机号'
                 label="手机号">
        <template #button>
          <button class='app-button--text'
                  @click='clickSendSms'
                  :disabled='disabled'>{{text}}</button>
        </template>
      </van-field>
      <van-field v-model="smsCode"
                 label="验证码"
                 placeholder='请输入验证码' />
    </van-cell-group>

    <div class="action">
      <button class="app-button app-button__primary"
              :disabled='!smsCode'
              @click="next">下一步</button>
    </div>
  </app-page>
</template>

<script setup lang="ts">
import { ISms } from "/@/apis/goods/mode"
import { useForm } from './useForm'

const route = useRoute()
const signId = Number(route.params.id)
const channel = Number(route.query.channel)

const initFormValue: ISms = {
  signId: signId,
  accountNo: '6214850201238229',
  accountName: '林维雄',
  id: '445224199104190312',
  tel: '13226665872',
  channel
}

const { form, smsCode, clickSendSms, next, text, disabled } = useForm(initFormValue)

</script>

<style lang="scss" scoped>
.action {
  text-align: center;
  margin-top: 200px;
}
</style>
