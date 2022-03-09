export function useLoading() {
  const loading = ref(false)
  const finished = ref(false)

  const stopLoading = () => loading.value = false

  const resetLoading = () => {
    loading.value = false
    finished.value = false
  }

  const finishLoading = () => {
    loading.value = false
    finished.value = true
  }

  return {
    loading,
    finished,
    stopLoading,
    resetLoading,
    finishLoading
  }
}
