import Mock from 'mockjs'
import { resultPageSuccess } from './utils'
import { URL } from '../src/apis/clue'

Mock.setup({
  timeout: '500-1200'
})


Mock.mock(new RegExp('/autocloud' + URL.queryClueOrderList), 'get', () => {
  return resultPageSuccess([
    {
      id: 1,
      merchantId: 1895,
      message: '【太平洋保险】返修推荐至文洋闵行荣威:荣威CSA6468NEAQ多用途乘用车川Y69Z11出险情况：LS093995  标的车：川Y69Z11有损，碰撞（取车时发现车辆受损），非现报案号C310100VEH21310836报案人：何超联系电话：18228857114出险地址：上海市闵行区颛桥镇<太平洋产险> 回TD退订短信',
      customerName: '沈小明',
      customerPhone: 15000000001,
      plateNo: '沪A12345',
      brandName: '法拉利',
      carStatus: 10351001,
      repairStatus: 10331001,
      insCode: 'picc',
      orderSource: 10341001,
      reportNo: 202203021437,
      reportDate: '2022-03-02 15:15:15',
      reportAddress: '上海市闵行区颛桥镇',
      userId: null,
      status: 0,
      creator: 3359,
      createTime: '2022-03-02 14:38:49',
      modifier: null,
      updateTime: null

    },
    {
      id: 2,
      merchantId: 1895,
      message: '【太平洋保险】返修推荐至文洋闵行荣威:荣威CSA6468NEAQ多用途乘用车川Y69Z11出险情况：LS093995  标的车：川Y69Z11有损，碰撞（取车时发现车辆受损），非现报案号C310100VEH21310836报案人：何超联系电话：18228857114出险地址：上海市闵行区颛桥镇<太平洋产险> 回TD退订短信',
      customerName: '沈小明',
      customerPhone: 15000000001,
      plateNo: '沪A12345',
      brandName: '法拉利',
      carStatus: 10351001,
      repairStatus: 10331001,
      insCode: 'picc',
      orderSource: 10341001,
      reportNo: 202203021437,
      reportDate: '2022-03-02 15:15:15',
      reportAddress: '上海市闵行区颛桥镇',
      userId: null,
      status: 0,
      creator: 3359,
      createTime: '2022-03-02 14:40:30',
      modifier: null,
      updateTime: null
    }
  ])
});
