import { ResultEnum } from './../src/enums/http-enums';
export function resultSuccess<T>(content?: T, merge = false) {
  if (merge) {
    return {
      code: ResultEnum.SUCCESS,
      data: {
        gateReturnType: ResultEnum.GATE_SUCCESS,
        gateReturnMessage: '获取数据成功',
        ...content
      },
      message: 'success'
    };
  }
  else {
    return {
      code: ResultEnum.SUCCESS,
      data: {
        gateReturnType: ResultEnum.GATE_SUCCESS,
        gateReturnMessage: '获取数据成功',
        content
      },
      message: 'success'
    };
  }
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
