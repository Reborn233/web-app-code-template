export const useRefresh = () => {
  const loading = ref(false)

  const onRefresh = () => {
  }

  const stopRefresh = () => {
    loading.value = false
  }

  return {
    loading,
    onRefresh,
    stopRefresh
  }
}
