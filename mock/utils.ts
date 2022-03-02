import { ResultEnum } from './../src/enums/http-enums';
export function resultSuccess<T>(content: T, { message = 'success' } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    data: {
      gateReturnType: ResultEnum.GATE_SUCCESS,
      gateReturnMessage: '获取数据成功',
      content
    },
    message
  };
}

export function resultError(message = 'Request failed', { code = ResultEnum.ERROR, content = null } = {}) {
  return {
    code,
    data: {
      gateReturnType: ResultEnum.GATE_SUCCESS,
      gateReturnMessage: message,
      content
    },
    message
  };
}
