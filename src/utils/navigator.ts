export function isWeChat() {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf('micromessenger') > -1
}

export function isAlipay() {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf('alipayclient') > -1
}
