
import styleImport, { VantResolve } from 'vite-plugin-style-import'

export function configStyleImportPlugin() {
  const styleImportPlugin = styleImport({
    resolves: [VantResolve()]
    // libs: [
    //   {
    //     libraryName: 'vant',
    //     esModule: true,
    //     resolveStyle: (name) => `vant/es/${name}/style`,
    //   },
    // ],
  })
  return styleImportPlugin
}
