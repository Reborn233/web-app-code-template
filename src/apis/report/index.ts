import { IDefeatItem } from './model.d';
import http from '/@/utils/http'

export enum REPORT_URL {
  queryRepairBusinessReport = '/repair/report/business/list',
  queryRepairDefeatReport = '/repair/report/defeat/list'
}

export const api_queryRepairBusinessReport = async (params?: any): Promise<any[]> => http.get(REPORT_URL.queryRepairBusinessReport, { params })

export const api_queryRepairDefeatReport = async (params?: any): Promise<IDefeatItem[]> => http.get(REPORT_URL.queryRepairDefeatReport, { params })
