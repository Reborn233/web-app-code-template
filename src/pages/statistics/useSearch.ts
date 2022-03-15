import { formatDate, getCurrentMonthDays } from '../../utils/date'
export function useSearch() {
  const startMonth = ref(getCurrentMonthDays()[0])
  const endMonth = ref(getCurrentMonthDays()[1])
  const showCalendar = ref(false)
  const onCalendarConfirm = (values: any[]) => {
    const [start, end] = values
    showCalendar.value = false
    startMonth.value = formatDate(start, 'YYYY-MM-DD')
    endMonth.value = formatDate(end, 'YYYY-MM-DD')
  }

  return {
    startMonth,
    endMonth
  }
}
