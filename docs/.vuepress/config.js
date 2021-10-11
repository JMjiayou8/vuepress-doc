module.exports = {
  title: '前端',
  description: '明媚jm静好',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '学习笔记', link: '/note/' },
      { text: '工作笔记', link: '/record/' },
      // { text: '部门培训', link: '/train/' },
      { text: '资源', link: '/resource/' },
    ],
    sidebar:{
      '/record/':[
        // '',
        'asiainfo',
        'sefon',
        'yoho',
        'auais'
      ],
      '/note/':[
        {
          title:'基础',
          collapsable: false,
          children:[
            './basic/html',
            './basic/css',
            './basic/js',
            './basic/es6',
            './basic/json',
            './basic/bower',
            './basic/http'
          ]
        },
        {
          title:'框架',
          collapsable: false,
          children:[
            './frame/jquery',
            './frame/vue-1',
            './frame/vue-2',
            './frame/vue3',
            './frame/element-ui',
            './frame/react',
            './frame/antd',
            './frame/webpack',
            './frame/q',
            './frame/project'
          ]
        },
        {
          title:'其它',
          collapsable: false,
          children:[
            './other/common',
            './other/algorithm',
            './other/safe',
            './other/youhua'
          ]
        }
      ],
      '/train/':[
        '',
        'rule'
      ],
    }
  }
}