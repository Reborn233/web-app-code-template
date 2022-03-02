import { Ref } from 'vue'
import { api_getSubscribeProductChannel } from '/@/apis/goods'
import { IChannel } from '/@/apis/goods/mode'
import { useMessage } from '/@/hooks/useMessage'
export function useChannel() {
  const show = ref(false)
  const channel = ref(0)
  const channels: Ref<IChannel[]> = ref([])
  const { Toast } = useMessage()


  const getSubscribeProductChannel = async (id: number, callback?: Function) => {
    try {
      Toast.loading({
        message: '请稍等...',
        forbidClick: true,
        duration: 0
      })
      const _data = await api_getSubscribeProductChannel(id)
      const list = _data.content
      const len = list.length
      if (len === 1) {
        const tlChannel = list[0].channel
        callback && callback(tlChannel)
      }
      else {
        show.value = true
        channels.value = list
      }
    } catch (error) {

    }
    Toast.clear()
  }

  return {
    show,
    channel,
    channels,
    getSubscribeProductChannel
  }
}
