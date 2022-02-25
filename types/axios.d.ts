export interface Result<T = any> {
  code: string;
  message: string;
  content: T;
  succeeded: boolean
}
