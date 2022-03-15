export function isWeChat() {
  const ua = window.navigator.userAgent.toLowerCase();
  if (import.meta.env.DEV) return true;
  return ua.indexOf('micromessenger') > -1
}

export function isAlipay() {
  const ua = window.navigator.userAgent.toLowerCase();
  if (import.meta.env.DEV) return true;
  return ua.indexOf('alipayclient') > -1
}

export function isWxWork() {
  const ua = navigator.userAgent.toLowerCase();
  if (import.meta.env.DEV) return true;
  return ua.indexOf('wxwork') > -1;
}
