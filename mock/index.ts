import Mock from 'mockjs'
import { resultSuccess, resultError } from './utils'
import { URL } from '../src/apis/goods'

Mock.setup({
  timeout: '500-1200'
})

Mock.mock(new RegExp(URL.goodsInfoById), 'post', () => {
  return resultSuccess({
    id: 7,
    reqNo: "yttestdingyue20220225002",
    pkOrg: 1213503,
    billType: null,
    billNo: null,
    thirdUserId: null,
    attachData: null,
    signNotifyUrl: null,
    deductionNotifyUrl: null,
    productNo: null,
    productName: "包月-哪吒1号车载皮肤",
    productDesc: "车机系统皮肤",
    productPrice: 15,
    deductionPeriod: 1,
    periodFlag: 2,
    isImmediately: 1,
    executeTime: "2022-02-25 00:00:00",
    nextDeductionTime: "2022-02-25 00:00:00",
    isAutoDeduction: 1,
    templateId: 10000111,
    returnUrl: null,
    signStatus: 1,
    signChannel: null,
    signType: 1,
    signTime: null,
    isDelete: false,
    createTime: "2022-02-28 12:04:50",
    createBy: "1213503",
    updateTime: "2022-02-28 12:04:51",
    updateBy: "1213503"
  })
});

Mock.mock(new RegExp(URL.getSubscribeProductChannel), 'post', () => {
  return resultSuccess([
    {
      channel_name: "通联",
      channel: 10701005
    },
    {
      channel_name: "支付宝",
      channel: 10701009
    }
  ])
});
