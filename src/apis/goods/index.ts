import { IGoods, ISms, ISign, IChannel, IReqSign } from './mode'
import { GateResult } from '/#/axios'
import http from '/@/utils/http'

export enum URL {
  getSubscribeProductChannel = '/sign/getSubscribeProductChannelList',
  goodsInfoById = '/sign/pay/getSignInfo',
  sendSms = '/sign/sendSms',
  sign = '/sign/getSignUrl'
}


export const api_getSubscribeProductChannel = async (id: number): Promise<GateResult<IChannel[]>> => http.post(URL.getSubscribeProductChannel, { signId: id })

export const api_queryGoodsById = async (id: number): Promise<GateResult<IGoods>> => http.post(`${URL.goodsInfoById}`, { signId: id })

export const api_sendSms = async (params: ISms) => http.post(URL.sendSms, params)

export const api_getSignUrl = async (params: ISign): Promise<GateResult<IReqSign>> => http.post(URL.sign, params)
