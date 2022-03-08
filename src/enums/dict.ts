export enum CHANNEL_TYPE {
  TL = 10701005,
  ALIPAY = 10701009
}

export enum SIGN_STATUS {
  WAIT = 0, // 待签约
  DOING = 1, // 签约中
  SUCCESS = 2, // 签约成功
  CANCELING = 3, // 解约中
  CANCELED = 4 // 已解约
}

export enum FEE_STATUS {
  WAIT = 10, // 待扣费
  DOING = 20, // 扣费中
  SUCCESS = 30, // 扣费成功
  REFUND = 40, // 退款中
  REFUND_SUCCESS = 50 // 退款成功
}
