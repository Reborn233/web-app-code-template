import { REPAIR_STATUS, ORDER_SOURCE, CLUE_STATUS, ARRIVE_TYPE } from './../enums/dict';

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
    value: CLUE_STATUS.ARRIVE
  },
  {
    label: '流失',
    value: CLUE_STATUS.LOSE
  }
]

export const ARRIVE_TYPE_LIST = [
  {
    label: '自行到店',
    value: ARRIVE_TYPE.SELF
  },
  {
    label: '接车到店',
    value: ARRIVE_TYPE.PICK
  }
]

export const LOSS_REASON_LIST = [
  {
    label: '去其他厂',
    value: 10371001
  },
  {
    label: '个人原因',
    value: 10371002
  },
  {
    label: '店面价格高',
    value: 10371003
  },
  {
    label: '非本店保险',
    value: 10371004
  },
  {
    label: '单位车他人推荐维修点',
    value: 10371005
  },
  {
    label: '非本店购车',
    value: 10371006
  },
  {
    label: '店面时效性低',
    value: 10371007
  },
  {
    label: '店面服务差',
    value: 10371008
  },
  {
    label: '损失小',
    value: 10371009
  },
  {
    label: '距离远',
    value: 10371010
  }
]
