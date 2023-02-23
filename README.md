# base-tempalte
便于直接使用到线上项目，集成基础打包配置和一套完善的打包规范

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)+ eslint + prettier.

## 环境
node版本需大于14.18.+，或者16+及更高版本，否则会遇到一些预期以外的错误

## How to use

1.安装依赖
```
yarn
```
2.启动本地服务
```
yarn dev  => vite --mode development 
yarn qa   => vite --mode test
yarn prod => vite --mode production
```
3.打包
```
yarn build     => vite build --mode production
yarn build:qa  => vite build --mode test
```

### 主要用到的库

- vue3全家桶 vue3 + vue-router@4 + pinia(新版本的vuex.按需使用，如果不需要的项目可以移除)
- http 请求:axios
- 提交规范:git cz commitizen
- 代码检查:eslint,格式化:prettier.提交之前检查与修复：lint-staged,commitLint


### 目录结构

```
├── README.md
├── package.json
├── index.html
├── .husky  # git hooks配置
├── .vscode  # 保持项目各成员使用相同的编辑器配置
├── coverage  # 单测结果
├── src
│   ├── api  # 请求接口
│   ├── assets  # 静态资源
│          └── styles 全局样式
│          └── images 图片资源
│   ├── components  # 通用业务组件
│   ├── directives # 指令集（如需，可自行补充）
│   ├── hooks # 全局hooks
│   ├── layouts  # 布局
│   ├── mock  # 模拟数据
│   ├── routers # 路由配置
│   ├── stores  # 状态管理中心
│   └── utils  # 工具库
│   ├── views  # 页面模板
│   └── App.vue  # 视图入口
│   └── main.ts  # 入口文件
└── .commitlintrc.js  # commitLint配置
└── .cz-config.js  # commitMsg
└── .env.development  # 开发环境使用的环境变量
└── .env.test  # 测试环境使用的环境变量
└── .env.production  # 生产环境使用的环境变量
└── .eslintrc.js  # eslint规则配置
└── .gitignore
└── .prettierrc.js  # prettier规则配置
└── .stylelintrc.json  # stylelint规则配置
└── vite.config.js  # vite打包配置
└── vitese.config.js  # vitest打包配置(单测使用)
├── tests  单元测试
│   ├── api   # 接口测试
│   ├── unit  # 组件测试、业务测试

```


### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

其他规范参考：
[clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)
[airbnb](https://github.com/airbnb/javascript)
[eslint](https://eslint.vuejs.org/rules/)



