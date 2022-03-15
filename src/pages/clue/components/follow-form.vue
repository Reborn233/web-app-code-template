<template>
  <app-page>
    <template #navbar>
      <van-nav-bar title="录入跟进"
                   left-text="关闭"
                   right-text="保存"
                   @click-left="close"
                   @click-right="save">
      </van-nav-bar>
    </template>
    <van-form>
      <van-cell-group>
        <app-select label='线索状态'
                    v-model="form.clueStatus"
                    :options='clueStatusOptions'></app-select>
        <app-select v-if="showNextFollowTime"
                    label='下次跟进时间'
                    type='date'
                    class="required"
                    :minDate='minDate'
                    v-model="form.nextFollowTime"></app-select>
        <app-select v-if="showBookingTime"
                    label='预约到店时间'
                    type='datetime'
                    :minDate='minDate'
                    class="required"
                    value-format="YYYY-MM-DD HH:mm"
                    v-model="form.bookingTime"></app-select>
        <app-select v-if="showArriveType"
                    label='到店方式'
                    :options='arriveTypeOptions'
                    v-model="form.arriveType"></app-select>
        <app-select v-if="showLossReason"
                    label='流失原因'
                    :options='lossReasonOptions'
                    v-model="form.lossReason"></app-select>
        <van-field v-model="form.remark"
                   rows="3"
                   autosize
                   label="备注"
                   type="textarea"
                   placeholder="请输入备注" />
      </van-cell-group>
    </van-form>
  </app-page>
</template>

<script lang="ts">
import { IFollowForm } from "../../../apis/clue/model.d"
import { ARRIVE_TYPE_LIST, CLUE_STATUS_LIST, LOSS_REASON_LIST } from "/@/configs"
import { CLUE_STATUS } from "/@/enums/dict"
import { useMessage } from "/@/hooks/useMessage"


export default defineComponent({
  name: 'followForm',
  props: {
    orderId: {
      type: [Number, String],
      required: true
    }
  },
  emits: ['onClose', 'onSubmit'],
  setup(prop, ctx) {
    const { notify } = useMessage()
    const clueStatusOptions = ref(CLUE_STATUS_LIST.slice(1))
    const arriveTypeOptions = ref(ARRIVE_TYPE_LIST)
    const lossReasonOptions = ref(LOSS_REASON_LIST)
    const form = ref<IFollowForm>({
      orderId: prop.orderId,
      clueStatus: CLUE_STATUS.WAIT_FOLLOW,
      remark: '',
      clueReason: '',
      nextFollowTime: '',
      bookingTime: '',
      arriveType: '',
      lossReason: ''
    })

    const minDate = ref(new Date())

    const showNextFollowTime = computed(() => {
      return form.value.clueStatus === CLUE_STATUS.WAIT_FOLLOW || form.value.clueStatus === CLUE_STATUS.FOLLOWING
    })

    const showBookingTime = computed(() => {
      return form.value.clueStatus === CLUE_STATUS.BOOK
    })

    const showArriveType = computed(() => {
      return form.value.clueStatus === CLUE_STATUS.ARRIVE
    })

    const showLossReason = computed(() => {
      return form.value.clueStatus === CLUE_STATUS.LOSE
    })

    const close = () => {
      ctx.emit('onClose')
    }

    const save = () => {
      if (showNextFollowTime.value && !form.value.nextFollowTime) {
        notify.error('请选择下次跟进时间!')
        return
      }
      if (showBookingTime.value && !form.value.bookingTime) {
        notify.error('请选择预约到店时间!')
        return
      }
      ctx.emit('onSubmit')
    }
    return {
      clueStatusOptions,
      arriveTypeOptions,
      lossReasonOptions,
      showNextFollowTime,
      showBookingTime,
      showArriveType,
      showLossReason,
      form,
      minDate,
      save,
      close
    }
  }
})

</script>

<style lang="scss" scoped>
</style>
