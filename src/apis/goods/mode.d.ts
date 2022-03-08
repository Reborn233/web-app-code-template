export interface IGoods {
  signId: number | null,
  reqNo: string,
  productName: string,
  productDesc: string,
  productPrice: number,
  signStatus: number
}

export interface IChannel {
  channel: number,
  channelName: string
}

export interface ISms {
  signId: number | null,
  accountNo: string,
  accountName: string,
  id: number | string,
  tel: number | string,
  channel: number
}

export interface ISign {
  signId: number | null,
  signChannel: number
  smsCode?: number | string
}

export interface IReqSign {
  signChannel: number,
  signStatus: number
  signUrl: string | null,
  currentDeductionTime: string,
  deductionStatus: number,
  nextDeductionDate: string
}
