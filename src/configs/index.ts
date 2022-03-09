import { REPAIR_STATUS, ORDER_SOURCE, CLUE_STATUS } from './../enums/dict';

export const REPAIR_STATUS_LIST = [
  {
    label: '送修',
    value: REPAIR_STATUS.GO
  },
  {
    label: '返修',
    value: REPAIR_STATUS.BACK
  }
]

export const ORDER_SOURCE_LIST = [
  {
    label: '客户自行到店',
    value: ORDER_SOURCE.SELF
  },
  {
    label: '推荐到店',
    value: ORDER_SOURCE.RECOMMEND
  },
  {
    label: '外拓',
    value: ORDER_SOURCE.OUT
  },
  {
    label: '保险公司短信推送',
    value: ORDER_SOURCE.PUSH
  },
  {
    label: '保险公司非短信通知',
    value: ORDER_SOURCE.NOT_NOTE
  }
]

export const CLUE_STATUS_LIST = [
  {
    label: '待分配',
    value: CLUE_STATUS.WAIT_ALLOT
  },
  {
    label: '待跟进',
    value: CLUE_STATUS.WAIT_FOLLOW
  },
  {
    label: '跟进中',
    value: CLUE_STATUS.FOLLOWING
  },
  {
    label: '预约到店',
    value: CLUE_STATUS.BOOK
  },
  {
    label: '车辆到店',
    value: CLUE_STATUS.ARRIVCE
  },
  {
    label: '流失',
    value: CLUE_STATUS.LOSE
  }
]
