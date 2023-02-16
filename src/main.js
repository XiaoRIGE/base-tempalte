import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 暂不使用脚本方式全局注册组件 参考issue https://github.com/vitejs/vite/issues/10616
// import componentRegister from './components/GlobalComponents/componentRegister.js'

// .use(componentRegister)
createApp(App).use(router).mount('#app')
