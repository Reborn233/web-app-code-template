
export function useFollowForm() {
  const showPopup = ref(false)

  const openPopup = () => {
    showPopup.value = true
  }
  const closePopup = () => {
    showPopup.value = false
  }

  const save = () => {
  }

  return {
    showPopup,
    openPopup,
    closePopup,
    save
  }
}
