import { IGoods } from './mode'
import http from '/@/utils/http'

enum URL {
  goods = '/v1/goods'
}

export const api_queryGoodsById = async (id: number): Promise<IGoods> => http.get(URL.goods, { params: { id } })
