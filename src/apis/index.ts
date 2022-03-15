import { Result } from '/#/axios'
import http from '/@/utils/http'

export enum IndexURL {
  queryDict = '/repair/listSysCode',
  authLogin = '/repair/merchant/token/get',
  queryUserInfo = '/repair/merchantuser/logininfo/get'
}

export interface IDictItem {
  type: string,
  code: string,
  name: string,
  description: string
}

export interface IDict {
  [attr: string]: IDictItem[]
}

export interface IUser {
  userId: number,
  userName: string,
  headshotUrl: string | null,
  phone: string,
  roleIdList: number[],
  roleNameList: string[],
  privilegeCodes: string[],
  merchantId: number,
  merchantName: string,
  merchantAuditStatusId: number,
  merchantCopyAuditStatusId: number,
  accountId: number,
  isAdmin: number
}

export const api_queryDict = async (): Promise<IDict> => http.get(IndexURL.queryDict)

/**
 * 企业微信授权code换token
 */
export const api_getTokenByQYWX = (code: string, appid: string): Promise<string> => {
  return http.get(IndexURL.authLogin, {
    params: {
      code, appid
    }
  })
}

/**
 * 根据当前登录用户token获取用户信息
 * @param {String} token 当前登录用户的token
 */
export const api_getUserInfo = (): Promise<IUser> => {
  return http.get(IndexURL.queryUserInfo)
}
