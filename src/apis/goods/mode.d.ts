export interface IGoods {
  id: number | null,
  reqNo: string,
  productName: string,
  productDesc: string,
  productPrice: number
}

export interface IChannel {
  channel: number,
  channel_name: string
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
  smsCode: number | string
}
