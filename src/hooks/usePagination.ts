export function usePagination() {
  const pageParams = ref({
    currentPage: 1,
    pageSize: 10,
    total: 0
  })

  const buildPageParams = (parms: any) => {
    return {
      currentPage: pageParams.value.currentPage,
      pageSize: pageParams.value.pageSize,
      ...parms
    }
  }

  const setFirstPage = () => {
    pageParams.value.currentPage = 1
  }

  const setNextPage = () => {
    pageParams.value.currentPage += 1
  }

  const setTotal = (total: number) => {
    pageParams.value.total = total || 0
  }

  const pagerChange = (pageOption: any) => {
    pageParams.value.currentPage = pageOption.currentPage
    pageParams.value.pageSize = pageOption.pageSize
  }

  return {
    buildPageParams,
    pageParams,
    setFirstPage,
    setNextPage,
    setTotal,
    pagerChange
  }
}
