export function noop() { }

export function transferTargetType(target: any) {
  return Object.prototype.toString.call(target);
}

export function isString(target: any) {
  return typeof target === 'string';
}

export function isObject(target: any) {
  return transferTargetType(target) === '[object Object]';
}

export function isNull(target: any) {
  return transferTargetType(target) === '[object Null]';
}

export function isUndefined(target: any) {
  return transferTargetType(target) === '[object Undefined]';
}

export function isArray(target: any) {
  return transferTargetType(target) === '[object Array]';
}

export function isRegExp(target: any) {
  return transferTargetType(target) === '[object RegExp]';
}

export function isDate(target: any) {
  return transferTargetType(target) === '[object Date]';
}

export function isFunction(target: any) {
  return transferTargetType(target) === '[object Function]';
}

export function isBoolean(target: any) {
  return transferTargetType(target) === '[object Boolean]';
}

export function isNumber(target: any) {
  return transferTargetType(target) === '[object Number]';
}

export function isPlainObj(target: any) {
  return !isNull(target) && isObject(target);
}
