import { IClue } from './mode'
import { ResultPage } from '/#/axios'
import http from '/@/utils/http'

export enum URL {
  queryClueOrderList = '/repair/clue/order/list'
}


export const api_queryClueOrderList = async (params: any): Promise<ResultPage<IClue[]>> => http.get(URL.queryClueOrderList, { params })
