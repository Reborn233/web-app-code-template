/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = '91200',
  GATE_SUCCESS = 'S',
  ERROR = '91300',
  GATE_ERROR = 'E',
  TIMEOUT = '100002',
  MSG_SUCCESS = 'ok',
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

export enum ResponseTypeEnum {
  ARRAYBUFFER = 'arraybuffer',
  BLOB = 'blob'
}
