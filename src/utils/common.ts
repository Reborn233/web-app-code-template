export function noop() { }

export function alink(href: string) {
  const a = document.createElement('a')
  a.href = href
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
