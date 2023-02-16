import { defineAsyncComponent } from 'vue'
const components = import.meta.glob('./*.vue') // 异步方式

export default function install(app) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))

    // defineAsyncComponent 拆分应用为更小的块，并仅在需要时再从服务器加载相关组件
    app.component(name, defineAsyncComponent(value))
  }
}
