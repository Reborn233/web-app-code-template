import { REPAIR_STATUS_LIST, ORDER_SOURCE_LIST, CLUE_STATUS_LIST } from './index';
export function formatterRepairStatus(value: number) {
  const _res = REPAIR_STATUS_LIST.find(item => item.value === value)
  return _res ? _res.label : '-'
}

export function formatterOrderSource(value: number) {
  const _res = ORDER_SOURCE_LIST.find(item => item.value === value)
  return _res ? _res.label : '-'
}

export function formatterClueStatus(value: number) {
  const _res = CLUE_STATUS_LIST.find(item => item.value === value)
  return _res ? _res.label : '-'
}
