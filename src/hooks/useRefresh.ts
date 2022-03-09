export function useRefresh() {
  const refreshing = ref(false)

  const stopRefreshing = () => refreshing.value = false

  const sleep = (time = 1000) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }

  return {
    refreshing,
    sleep,
    stopRefreshing
  }
}
