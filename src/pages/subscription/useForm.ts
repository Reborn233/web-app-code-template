import { api_getSignUrl } from './../../apis/goods/index'
import { api_sendSms } from "/@/apis/goods"
import { ISms } from './../../apis/goods/mode.d'
import { useCountDown } from "/@/hooks/useCountDown"
import { useValidator } from '/@/hooks/useValidator'
import { useMessage } from "/@/hooks/useMessage"

export function useForm(initFormValue: ISms) {
  const { text, disabled, start } = useCountDown()
  const { Loading, Toast } = useMessage()
  const { validator } = useValidator()

  const router = useRouter()

  const rules = {
    accountNo: [
      { required: true, message: '银行卡必填' }
    ],
    id: [
      { required: true, message: '身份证必填' }
    ],
    accountName: [
      { required: true, message: '姓名必填' }
    ],
    tel: [
      { required: true, message: '手机号必填' }
    ]
  }
  const form = ref(initFormValue)
  const smsCode = ref('')

  const clickSendSms = async () => {
    try {
      await validator(rules, form.value)
      sendSms()
    } catch (error) {
    }
  }
  const sendSms = async () => {
    Loading.show()
    try {
      await api_sendSms(form.value)
      start()
      Toast.success('验证码已发送,请注意查收!')
    } catch (error) {
    }
    Loading.hide()
  }

  const next = async () => {
    try {
      await validator(rules, form.value)
      const params = {
        signId: form.value.signId,
        signChannel: form.value.channel,
        smsCode: smsCode.value
      }
      Loading.show()
      const _data = await api_getSignUrl(params)
      router.push({
        name: 'subscriptionSuccess',
        query: {
          nextDeductionDate: _data.content.nextDeductionDate,
          deductionStatus: _data.content.deductionStatus
        }
      })
    } catch (error) {
    }
    Loading.hide()
  }

  return {
    form,
    smsCode,
    clickSendSms,
    next,
    text,
    disabled
  }
}
