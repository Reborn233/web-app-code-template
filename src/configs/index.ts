import { FEE_STATUS, SIGN_STATUS } from './../enums/dict';

export const SIGN_STATUS_LIST = [
  {
    label: '待签约',
    value: SIGN_STATUS.WAIT
  },
  {
    label: '签约中',
    value: SIGN_STATUS.DOING
  },
  {
    label: '已签约',
    value: SIGN_STATUS.SUCCESS
  },
  {
    label: '解约中',
    value: SIGN_STATUS.CANCELING
  },
  {
    label: '已解约',
    value: SIGN_STATUS.CANCELED
  }
]

export const FEE_STATUS_LIST = [
  {
    label: '待扣费',
    value: FEE_STATUS.WAIT
  },
  {
    label: '扣费中',
    value: FEE_STATUS.DOING
  },
  {
    label: '扣费成功',
    value: FEE_STATUS.SUCCESS
  },
  {
    label: '退款中',
    value: FEE_STATUS.REFUND
  },
  {
    label: '退款成功',
    value: FEE_STATUS.REFUND_SUCCESS
  }
]
