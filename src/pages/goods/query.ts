import { IGoods } from './../../apis/goods/mode.d';
import { api_queryGoodsById } from './../../apis/goods/index';
export const useGoods = () => {
  const initGoodsValue: IGoods = {
    id: null,
    reqNo: '',
    productName: '',
    productDesc: '',
    productPrice: 0
  }
  const goods = ref(initGoodsValue)
  const errorMessage = ref('')
  const loading = ref(false);

  const queryGoodsById = async (id: number) => {
    loading.value = true
    try {
      const _goods = await api_queryGoodsById(id)
      goods.value = _goods.content
    } catch (error) {
      errorMessage.value = error
    }
    loading.value = false
  }


  return {
    goods,
    loading,
    errorMessage,
    queryGoodsById
  }
}
