import { ResultEnum } from './../src/enums/http-enums';
export function resultSuccess<T>(content: T, { message = 'success' } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    content,
    message,
    succeeded: true
  };
}

export function resultError(message = 'Request failed', { code = ResultEnum.ERROR, content = null } = {}) {
  return {
    code,
    content,
    message,
    succeeded: false
  };
}
