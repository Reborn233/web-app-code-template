export interface IClue {
  id: number,
  merchantId: number,
  message: string,
  customerName: string,
  customerPhone: string,
  plateNo: string,
  brandName: string,
  carStatus: number,
  repairStatus: number,
  insCode: string,
  orderSource: number,
  reportNo: string,
  reportDate: string,
  reportAddress: string,
  userId: number | null,
  status: number,
  creator: number,
  createTime: string,
  modifier: string | null,
  updateTime: string | null
}

export interface IFollowItem {
  id: number,
  orderId: number,
  userId: number,
  userName: string,
  nextFollowTime: string,
  remark: string,
  clueStatus: number,
  clueReason: number,
  status: number,
  followTime: string,
  creator: number,
  createTime: string,
  modifier: string | null,
  updateTime: string | null
}

export interface IFollowForm {
  orderId: number | string | null,
  nextFollowTime: string,
  bookingTime: string,
  remark: string,
  clueStatus: string | number | undefined,
  clueReason: string | number | undefined,
  arriveType: string | number | undefined,
  lossReason: string | number | undefined
}
