import { IGoods } from './../../apis/goods/mode.d';
import { api_queryGoodsById } from './../../apis/goods/index';
export const useGoods = () => {
  const initGoodsValue: IGoods = {
    productId: null,
    orderNo: '',
    goodsName: '',
    goodsDesc: '',
    orderAmt: 0,
    cycleDesc: ''
  }
  const goods = ref(initGoodsValue)
  const loading = ref(false);

  const queryGoodsById = async (id: number) => {
    loading.value = true
    try {
      const _goods = await api_queryGoodsById(id)
      goods.value = _goods
    } catch (error) {

    }
    loading.value = false
  }

  onMounted(() => {
    queryGoodsById(1)
  })

  return {
    goods,
    loading,
    queryGoodsById
  }
}
