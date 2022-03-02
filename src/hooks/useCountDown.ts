
export function useCountDown() {
  const ONE_MINUTE = 60
  const VCODE_TEXT = '获取验证码'
  const SEND_VCODE_SUCCESS_TEXT = '验证码已发送'

  const num = ref(ONE_MINUTE)
  const text = ref(VCODE_TEXT)
  let timer: any = null
  const disabled = ref(false)


  const start = () => {
    console.log(disabled.value)
    if (disabled.value) return
    disabled.value = true
    countDown()
  }

  const reset = () => {
    text.value = VCODE_TEXT
    disabled.value = false
    num.value = ONE_MINUTE
    clearTimeout(timer)
    timer = null
  }

  const countDown = () => {
    if (num.value > 1) {
      num.value--
      text.value = `${num.value}秒后重发`
      timer = setTimeout(countDown, 1000)
    } else {
      reset()
    }
  }

  return {
    start,
    text,
    disabled
  }
}
