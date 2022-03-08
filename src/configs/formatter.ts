import { SIGN_STATUS_LIST, FEE_STATUS_LIST } from './index';
export function formatterFeeStatus(value: number) {
  const _res = FEE_STATUS_LIST.find(fee => fee.value === value)
  return _res ? _res.label : '-'
}

export function formatterSignStatus(value: number) {
  const _res = SIGN_STATUS_LIST.find(sign => sign.value === value)
  return _res ? _res.label : '-'
}
