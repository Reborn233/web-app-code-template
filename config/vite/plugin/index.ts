import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { AutoImportDeps } from './autoImport'
import { configStyleImportPlugin } from './styleImport'
import { autoRegistryComponents } from './components'

export function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // 自动按需引入依赖
    AutoImportDeps(),
    configStyleImportPlugin(),
    autoRegistryComponents()
  ];

  return vitePlugins;
}
