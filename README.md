- 目录结构
```
├── docs
│   ├── .vuepress (可选的)  ##用于存放全局的配置、组件、静态资源等。
│   │   ├── components (可选的)  ## 该目录中的 Vue 组件将会被自动注册为全局组件。
│   │   ├── theme (可选的)  ##用于存放本地主题
│   │   │   └── Layout.vue
│   │   ├── public (可选的) ##静态资源目录。
│   │   ├── styles (可选的) ##用于存放样式相关的文件
│   │   │   ├── index.styl ##将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
│   │   │   └── palette.styl ##用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
│   │   ├── templates (可选的, 谨慎配置) ##存储 HTML 模板文件
│   │   │   ├── dev.html ##用于开发环境的 HTML 模板文件。
│   │   │   └── ssr.html ##构建时基于 Vue SSR 的 HTML 模板文件。
│   │   ├── config.js (可选的) ##配置文件的入口文件，也可以是 YML 或 toml。
│   │   └── enhanceApp.js (可选的) ##客户端应用的增强。
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

把 ==docs== 目录作为 `targetDir`,所有的`文件的相对路径`都是相对于 `docs` 目录的
|文件的相对路径|页面路由地址|
|-|-|
|/README.md|/|
|/guide/README.md|/guide/|
|/config.md|/config.html|

