module.exports = {
  title: 'CUC前端',
  description: '明媚jm静好',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      // { text: '工作笔记', link: '/record/' },
      { text: '学习笔记', link: '/note/' },
      // { text: '部门培训', link: '/train/' },
    ],
    sidebar:{
      // '/record/':[
      //   '',
      //   'element-ui',
      //   'asiainfo',
      //   'sefon',
      //   'yoho',
      //   'auais'
      // ],
      '/note/':[
        '',
        'react'
      ],
      // '/train/':[
      //   '',
      //   'rule',
      //   'examine',
      //   // 'html',
      //   // 'css',
      //   // 'js',
      //   // 'jquery',
      //   // 'es6',
      //   // 'vue-1',
      //   // 'vue-2'
      // ],
    }
  }
}