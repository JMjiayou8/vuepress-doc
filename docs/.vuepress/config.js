module.exports = {
  title: '明媚jm静好',
  description: '明媚jm静好',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '工作笔记', link: '/record/' },
      { text: '学习笔记', link: '/note/' },
      { text: '部门培训', link: '/train/' },
    ],
    sidebar:{
      '/record/':[
        '',
        'asiainfo',
        'sefon',
        'yoho',
        'auais'
      ],
      '/note/':[],
      '/train/':[
        '',
        'html',
        'css',
        'js',
        'jquery',
        'es6',
        'vue-1',
        'vue-2'
      ],
    }
  }
}