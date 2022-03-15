import { REPORT_URL } from './../src/apis/report/index';
import Mock from 'mockjs'
import { resultPageSuccess, resultSuccess } from './utils'
import { URL } from '../src/apis/clue'
import { IndexURL } from '../src/apis/index'

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
})

Mock.mock(new RegExp('/autocloud' + URL.queryFollowList), 'get', () => {
  return resultSuccess([
    {
      id: 2,
      orderId: 1,
      userId: 3359,
      userName: "陈沃尔",
      nextFollowTime: "2022-03-31 12:12:12",
      remark: "测试数据",
      clueStatus: 10001001,
      clueReason: 10001001,
      status: 0,
      followTime: "2022-03-03 16:54:54",
      creator: 3359,
      createTime: "2022-03-03 16:54:54",
      modifier: null,
      updateTime: null
    },
    {
      id: 1,
      orderId: 1,
      userId: 3359,
      userName: "陈沃尔",
      nextFollowTime: "2022-03-31 12:12:12",
      remark: "测试数据",
      clueStatus: 10001000,
      clueReason: 10001000,
      status: 1,
      followTime: "2022-03-03 13:11:35",
      creator: 3359,
      createTime: "2022-03-03 13:11:35",
      modifier: 3359,
      updateTime: "2022-03-03 16:54:54"
    }
  ])
})

Mock.mock(new RegExp('/autocloud' + IndexURL.queryDict), 'get', () => {
  return resultSuccess({
    "1033": [
      {
        type: "1033",
        code: "10331001",
        name: "返修",
        description: "案件类型：返修"
      },
      {
        type: "1033",
        code: "10331002",
        name: "送修",
        description: "案件类型：送修"
      }
    ],
    "1034": [
      {
        type: "1034",
        code: "10341001",
        name: "客户自行到店",
        description: "工单来源：客户自行到店"
      },
      {
        type: "1034",
        code: "10341002",
        name: "推荐到店",
        description: "工单来源：推荐到店"
      },
      {
        type: "1034",
        code: "10341003",
        name: "外拓",
        description: "工单来源：外拓"
      },
      {
        type: "1034",
        code: "10341004",
        name: "保险公司短信推送",
        description: "工单来源：保险公司短信推送"
      },
      {
        type: "1034",
        code: "10341005",
        name: "保险公司非短信通知",
        description: "工单来源：保险公司非短信通知"
      }
    ],
    "1035": [
      {
        type: "1035",
        code: "10351001",
        name: "待分配",
        description: "线索状态：待分配"
      },
      {
        type: "1035",
        code: "10351002",
        name: "待跟进",
        description: "线索状态：待跟进"
      },
      {
        type: "1035",
        code: "10351003",
        name: "跟进中",
        description: "线索状态：跟进中"
      },
      {
        type: "1035",
        code: "10351004",
        name: "预约到店",
        description: "线索状态：预约到店"
      },
      {
        type: "1035",
        code: "10351005",
        name: "车辆到店",
        description: "线索状态：车辆到店"
      },
      {
        type: "1035",
        code: "10351006",
        name: "流失",
        description: "线索状态：流失"
      }
    ]
  })
})

Mock.mock(new RegExp('/autocloud' + IndexURL.queryUserInfo), 'get', () => {
  return resultSuccess({
    userId: 3303,
    userName: '模拟用户',
    headshotUrl:
      'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    phone: '15800000008',
    roleIdList: [244, 620],
    roleNameList: ['管理员', '签约宝服务顾问'],
    privilegeCodes: ['ANY'],
    merchantId: 1870,
    merchantName: '上海菲亚特4S店',
    merchantAuditStatusId: 3,
    merchantCopyAuditStatusId: 3,
    accountId: 2313,
    isAdmin: 1
  })
})

Mock.mock(new RegExp('/autocloud' + REPORT_URL.queryRepairBusinessReport), 'get', () => {
  return resultSuccess([
    {
      total: 2,
      waitDistribute: 1,
      waitFollow: 1,
      following: 0,
      backStore: 0,
      defeat: 0,
      reportDate: '2022-03-02'

    },
    {
      total: 1,
      waitDistribute: 0,
      waitFollow: 0,
      following: 1,
      backStore: 0,
      defeat: 0,
      reportDate: '2022-03-11'
    }
  ])
})

Mock.mock(new RegExp('/autocloud' + REPORT_URL.queryRepairDefeatReport), 'get', () => {
  return resultSuccess([
    {
      defeatCount: 1,
      clueStatus: 10371001
    },
    {
      defeatCount: 2,
      clueStatus: 10371002
    },
    {
      defeatCount: 3,
      clueStatus: 10371003
    },
    {
      defeatCount: 4,
      clueStatus: 10371004
    },
    {
      defeatCount: 5,
      clueStatus: 10371005
    },
    {
      defeatCount: 6,
      clueStatus: 10371006
    },
    {
      defeatCount: 7,
      clueStatus: 10371007
    },
    {
      defeatCount: 8,
      clueStatus: 10371008
    },
    {
      defeatCount: 9,
      clueStatus: 10371009
    },
    {
      defeatCount: 10,
      clueStatus: 10371010
    }
  ])
})
