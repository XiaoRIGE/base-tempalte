import { createApp } from 'vue'
import './assets/styles/common.scss'
import App from './App.vue'
import router from './routers'
import pinia from './stores'

// unplugin-vue-components 插件无法处理非组件模块，如 message，这种组件需要手动加载 参考：https://www.antdv.com/docs/vue/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD
import 'ant-design-vue/es/message/style/css'

// 暂不使用脚本方式全局注册组件 参考issue https://github.com/vitejs/vite/issues/10616
// import componentRegister from './components/GlobalComponents/componentRegister.js'

// .use(componentRegister)
createApp(App).use(router).use(pinia).mount('#app')
