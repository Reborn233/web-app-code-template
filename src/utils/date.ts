import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh'

type TDate = string | number | Date

export const formatDate = (date: TDate, format: string = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(date).format(format)
}

export const getDateDiff = (date: TDate) => {
  dayjs.extend(relativeTime)
  dayjs.locale('zh')
  const now = dayjs()
  const d = dayjs(date)

  return now.to(d)
}

export const now = () => dayjs().format('YYYY-MM-DD HH:mm:ss')

export const getCurrentMonthDays = (): string[] => {
  const start = dayjs().format('YYYY-MM-01')
  const end = dayjs().format('YYYY-MM-DD')
  return [start, end]
}
