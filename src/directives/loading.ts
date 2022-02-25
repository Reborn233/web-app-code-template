
import type { App, Directive, DirectiveBinding } from 'vue'
import { Loading } from 'vant'
let instance: any = null

const toggleLoading = (el: Element, binding: DirectiveBinding<any>) => {
  if (binding.value) {
    el.appendChild(instance.$el)
  } else {
    el.removeChild(instance.$el)
  }
};

const created = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  if (!instance) {
    instance = createApp(Loading).mount(document.createElement('div'))
  }
  const loading = instance.$el
  loading.classList.add('app-loading-mask')
}

const updated = (el: Element, binding: DirectiveBinding<any>) => {
  if (binding.oldValue !== binding.value) {
    toggleLoading(el, binding);
  }
}

const unmounted = (el: Element, binding: DirectiveBinding<any>) => {
  if (!instance || !instance.$el) return
  el.removeChild(instance.$el)
  instance = null
}

const loadingDirective: Directive = {
  created,
  updated,
  unmounted
};

export function setupLoadingDirective(app: App) {
  app.directive('loading', loadingDirective);
}
