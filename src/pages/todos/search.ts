import { Ref, ref, computed } from 'vue'
import { IListItem } from './list'

export const useQuery = (list: Ref<IListItem[]>) => {
  const search = ref('')

  const status = ref(0)

  const computedList = computed(() => {
    const _list = list.value.filter(item => item.content.includes(search.value))

    if (status.value === 0) return _list

    return _list.filter(item => item.status === status.value)
  })

  const changeStatus = (item: IListItem) => {
    item.status = item.status === 1 ? 2 : 1
  }

  return {
    search,
    computedList,
    status,
    changeStatus
  }
}
