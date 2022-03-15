export function noop() { }

export function alink(href: string) {
  const a = document.createElement('a')
  a.href = href
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export function getUrlParams(url = window.location.href) {
  return Object.assign(
    // @ts-ignore
    ...url.match(/([^?=&]+)(=([^&]*))?/g).map((m) => {
      let [f, v] = m.split('=');
      return {
        [f]: v
      };
    })
  );
}
