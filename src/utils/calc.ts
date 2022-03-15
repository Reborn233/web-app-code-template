export function calcArraySumBykey(array: any[], key: string) {
  let res = 0
  array.forEach(item => {
    if (item[key]) {
      res += Number(item[key])
    }
  })
  return res
}
