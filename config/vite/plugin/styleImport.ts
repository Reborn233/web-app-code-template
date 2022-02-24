
import styleImport from 'vite-plugin-style-import'

export function configStyleImportPlugin() {
  const styleImportPlugin = styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style`,
      },
    ],
  })
  return styleImportPlugin
}
