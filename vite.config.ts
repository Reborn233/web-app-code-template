import { UserConfig, ConfigEnv } from 'vite'
import { resolve } from 'path'
import { createVitePlugins } from './config/vite/plugin'
import proxy from './config/vite/proxy'
import { VITE_PORT } from './config/index'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  console.log(command, mode)
  return {
    base: '/',
    build: {
      assetsDir: 'static'
    },
    plugins: createVitePlugins(),
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        }
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/@/styles/variable.scss";'
        }
      }
    },
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: VITE_PORT, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      https: false,
      proxy,
    }
  }
}
