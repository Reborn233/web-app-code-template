import { Ref, ref, onMounted } from 'vue'

export interface IListItem {
  id: number,
  content: string,
  status: number
}


export const useList = () => {
  let list: Ref<IListItem[]> = ref([])
  onMounted(() => {
    getList()
  })

  const getList = async () => {
    const result = [
      {
        id: 1,
        content: '冰雪为媒 共赴冬奥之约',
        status: 1
      },
      {
        id: 2,
        content: '苏翊鸣夺金 中国6金创历史最佳',
        status: 1
      },
      {
        id: 3,
        content: '人类应该和衷共济和合共生',
        status: 2
      },
      {
        id: 4,
        content: '今天元宵节',
        status: 1
      },
      {
        id: 5,
        content: '一金一银！谷爱凌再获金墩墩',
        status: 2
      }
    ]
    list.value = result
  }

  return {
    list
  }
}
