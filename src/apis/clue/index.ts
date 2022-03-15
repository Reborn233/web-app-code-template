import { IClue, IFollowItem, IFollowForm } from './model'
import { ResultPage } from '/#/axios'
import http from '/@/utils/http'

export enum URL {
  queryClueOrderList = '/repair/clue/order/list',
  queryFollowList = '/repair/clue/order/follow/list',
  saveFollowInfo = '/repair/clue/order/follow/save'
}

export const api_queryClueOrderList = async (params: any): Promise<ResultPage<IClue[]>> => http.get(URL.queryClueOrderList, { params })

export const api_queryFollowList = async (orderId: any): Promise<IFollowItem[]> => http.get(URL.queryFollowList, { params: { orderId } })

export const api_saveFollowInfo = async (params: IFollowForm): Promise<true> => http.post(URL.saveFollowInfo, params)
