import { Ref } from 'vue'
import { api_getSubscribeProductChannel } from '/@/apis/goods'
import { IChannel } from '/@/apis/goods/mode'
import { useMessage } from '/@/hooks/useMessage'
export function useChannel() {
  const show = ref(false)
  const channel = ref(0)
  const channels: Ref<IChannel[]> = ref([])
  const { Loading } = useMessage()


  const getSubscribeProductChannel = async (id: number, callback?: Function) => {
    Loading.show()
    try {
      const _data = await api_getSubscribeProductChannel(id)
      const list = _data.content
      const len = list.length
      if (len === 1) {
        const channel = list[0].channel
        callback && callback(channel)
      }
      else {
        channels.value = list
        show.value = true
      }
    } catch (error) {

    }
    Loading.hide()
  }

  return {
    show,
    channel,
    channels,
    getSubscribeProductChannel
  }
}
