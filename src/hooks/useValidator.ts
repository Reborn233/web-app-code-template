
import { useMessage } from "/@/hooks/useMessage"
import Validator from '/@/utils/validator'
const { notify } = useMessage()
export function useValidator() {
  const validator = async (rules: any, form: any) => {
    try {
      await Validator(rules, form)
      return true
    } catch (error) {
      const errors = error as any[]
      notify.error(errors[0].message)
    }
  }

  return {
    validator
  }
}
