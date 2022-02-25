import Mock from 'mockjs'
import { resultSuccess } from './utils';

Mock.setup({
  timeout: '500-1200'
})

Mock.mock(new RegExp('/v1/goods'), 'get', () => {
  return resultSuccess({
    productId: 3,
    orderNo: 'OD_1641550505984',
    goodsName: '车载87号皮肤',
    goodsDesc: '按月付费套餐-哪吒汽车车载皮肤自然系列',
    orderAmt: 15,
    cycleDesc: '月'
  })
});
