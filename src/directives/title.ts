
import type { App, Directive, DirectiveBinding } from 'vue'

const created = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  const title = binding.value
  document.title = title || ''
}

const titleDirective: Directive = {
  created,
  updated: created
};

export function setupTitleDirective(app: App) {
  app.directive('title', titleDirective);
}
