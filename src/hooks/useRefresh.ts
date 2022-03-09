export function useRefresh() {
  const refreshing = ref(false)

  const stopRefreshing = () => refreshing.value = false

  return {
    refreshing,
    stopRefreshing
  }
}
