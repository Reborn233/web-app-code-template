/**
 * Configure and register global directives
 */
import type { App } from 'vue'
import { setupLoadingDirective } from './loading'
import { setupPermissionDirective } from './permission'
import { setupTitleDirective } from './title'

export function setupGlobDirectives(app: App) {
  setupPermissionDirective(app)
  setupLoadingDirective(app)
  setupTitleDirective(app)
}
