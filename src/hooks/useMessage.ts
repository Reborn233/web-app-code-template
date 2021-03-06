import {
  Notify,
  Dialog,
  Toast
} from 'vant'

export interface NotifyApi {
  info(message: string, duration?: number): void;
  success(message: string, duration?: number): void;
  error(message: string, duration?: number): void;
  warn(message: string, duration?: number): void;
}
Notify.setDefaultOptions({
  position: 'top'
})

const notifyApi: NotifyApi = {
  info(message, duration = 1500) {
    Notify({ type: 'primary', message: message, duration });
  },
  success(message, duration = 1500) {
    Notify({ type: 'success', message: message, duration });
  },
  error(message, duration = 1500) {
    Notify({ type: 'danger', message: message, duration });
  },
  warn(message, duration = 1500) {
    Notify({ type: 'warning', message: message, duration });
  }
}

Dialog.setDefaultOptions({
  confirmButtonColor: '#47cec6'
})

Toast.allowMultiple()
Toast.setDefaultOptions({
  duration: 2000,
  forbidClick: true
});

const Loading = {
  show(message = '请稍等...') {
    Toast.loading({
      message: message,
      forbidClick: true,
      duration: 0
    })
  },
  hide() {
    Toast.clear()
  }
}


export function useMessage() {
  return {
    notify: notifyApi,
    Dialog,
    Toast,
    Loading
  }
}
