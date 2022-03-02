export interface GateResult<T = any> {
  gateReturnType: string
  gateReturnMessage: string
  content: T
}
export interface Result<T = any> {
  code: string
  message: string
  data: GateResult<T>
}
