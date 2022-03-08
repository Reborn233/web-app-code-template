import { SIGN_STATUS, CHANNEL_TYPE } from './../../enums/dict';
import { IGoods } from './../../apis/goods/mode.d';
import { api_queryGoodsById, api_getSignUrl } from './../../apis/goods/index';
import { alink } from '/@/utils/common';
import { formatterSignStatus } from '/@/configs/formatter';
export const useGoods = () => {
  const initGoodsValue: IGoods = {
    signId: null,
    reqNo: '',
    productName: '',
    productDesc: '',
    productPrice: 0,
    signStatus: 0
  }
  const goods = ref(initGoodsValue)
  const errorMessage = ref('')
  const loading = ref(false);

  const showSignBtn = computed(() => [SIGN_STATUS.WAIT, SIGN_STATUS.DOING].includes(goods.value.signStatus))

  const showSignStatusText = computed(() => formatterSignStatus(goods.value.signStatus))

  const queryGoodsById = async (id: number) => {
    loading.value = true
    errorMessage.value = ''
    try {
      const _goods = await api_queryGoodsById(id)
      if (_goods.content) {
        goods.value = _goods.content
      }
      else {
        errorMessage.value = '未查到该产品信息'
      }
    } catch (error) {
    }
    loading.value = false
  }

  const aliPaySign = async (id: number) => {
    loading.value = true
    try {
      const _data = await api_getSignUrl({
        signId: id,
        signChannel: CHANNEL_TYPE.ALIPAY
      })
      if (_data && _data.content.signUrl) {
        alink(_data.content.signUrl)
      }
    } catch (error) {

    }
    loading.value = false
  }

  return {
    showSignBtn,
    showSignStatusText,
    goods,
    loading,
    errorMessage,
    queryGoodsById,
    aliPaySign
  }
}
