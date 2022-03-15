import { ResultEnum } from './../src/enums/http-enums';
export function resultSuccess<T>(content?: T) {
  return {
    code: ResultEnum.SUCCESS,
    content,
    message: 'success',
    succeeded: true
  };
}

export function resultPageSuccess<T>(content?: T) {
  return {
    code: ResultEnum.SUCCESS,
    content: {
      pageSize: 10,
      currentPage: 1,
      begin: 0,
      end: 10,
      totalCount: 2,
      resultList: content
    },
    message: 'success',
    succeeded: true
  };
}

export function resultError(message = 'Request failed', { code = ResultEnum.ERROR, content = null } = {}) {
  return {
    code,
    content,
    message
  };
}
