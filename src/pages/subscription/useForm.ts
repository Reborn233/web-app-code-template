import { api_getSignUrl } from './../../apis/goods/index'
import { api_sendSms } from "/@/apis/goods"
import { ISms } from './../../apis/goods/mode.d'
import { useCountDown } from "/@/hooks/useCountDown"
import Validator from '/@/utils/validator'
import { useMessage } from "/@/hooks/useMessage"
import { isArray } from '/@/utils/is'

export function useForm(initFormValue: ISms) {
  const { text, disabled, start } = useCountDown()
  const { notify } = useMessage()
  const form = ref(initFormValue)

  const smsCode = ref('')

  const rules = {
    accountNo: [
      { required: true, message: '银行卡必填' }
    ],
    accountName: [
      { required: true, message: '姓名必填' }
    ],
    tel: [
      { required: true, message: '手机号必填' }
    ]
  }
  const validatorForm = async () => {
    try {
      await Validator(rules, form.value)
      return true
    } catch (error) {
      const errors = error as any[]
      notify.error(errors[0].message)
    }
  }

  const sendSms = async () => {
    try {
      await api_sendSms(form.value)
      start()
    } catch (error) {
    }
  }

  const clickSendSms = async () => {
    try {
      await validatorForm()
      sendSms()
    } catch (error) {
    }
  }

  const next = async () => {
    try {
      await validatorForm()
      const params = {
        signId: form.value.signId,
        signChannel: form.value.channel,
        smsCode: smsCode.value
      }
      await api_getSignUrl(params)
    } catch (error) {
    }
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
