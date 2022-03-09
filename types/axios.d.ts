export interface Result<T = any> {
  code: string
  content: T
  message: string,
  succeeded: boolean
}

export interface ResultPage<T = any[]> {
  pageSize: number,
  currentPage: number,
  begin: number,
  end: number,
  totalCount: number,
  resultList: T
}
