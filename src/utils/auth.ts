import { MyStorage } from './storage'
const TokenKey = 'SIGNATURE_TOKEN';

export function getToken() {
  return MyStorage.localStorage.getItem(TokenKey) || '';
}

export function setToken(token: string) {
  MyStorage.localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  MyStorage.localStorage.setItem(TokenKey, '');
}
