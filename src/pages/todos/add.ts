import { Ref, ref, watch } from 'vue'
import { IListItem } from './list'
import { Toast } from 'vant'

export const useAdd = (list: Ref<IListItem[]>) => {
  const content = ref('')
  const show = ref(false)

  const save = () => {
    if (!content.value) {
      Toast({
        message: '请输入内容',
        position: 'bottom',
      })
      return
    }
    let id = list.value[list.value.length - 1].id
    const newItem = {
      id: ++id,
      content: content.value,
      status: 1
    }
    list.value.push(newItem)
    closePoup()
  }

  const openPoup = () => {
    show.value = true
  }

  const closePoup = () => {
    show.value = false
  }
  watch(show, (val) => {
    if (val) {
      content.value = ''
    }
  })


  return {
    show,
    content,
    save,
    openPoup,
    closePoup
  }
}
