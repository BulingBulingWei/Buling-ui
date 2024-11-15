export default [
  {
    title: '开始',
    type: 'document', // 普通文档
    children: [
      {
        title: '快速开始',
        name: 'getting-started',
        path: '/getting-started',
        component: () => import('@docs/getting-started.md')
      },
      {
        title: '主题与全局变量',
        name: 'theme',
        path: '/theme',
        component: () => import('@docs/theme.md')
      },
      {
        title: '字体',
        name: 'font',
        path: '/font',
        component: () => import('@docs/font.md')
      },
      {
        title: 'Icon 图标',
        name: 'icon',
        path: '/icon',
        component: () => import('@docs/icon.md')
      },
      {
        title: '更新日志',
        name: 'changelog',
        path: '/changelog',
        component: () => import('@/../CHANGELOG.md')
      }
    ]
  },

  {
    title: '基础组件',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Button 按钮',
        name: 'button',
        path: '/components/button',
        component: () => import('@/button/button.md')
      },

      ,
      {
        title: 'Cell 单元格',
        name: 'cell',
        path: '/components/cell',
        component: () => import('@/cell/cell.md')
      }
    ]
  },
  {
    title: '导航',
    type: 'component',
    children: []
  },
  {
    title: '输入',
    type: 'component',
    children: []
  },
  {
    title: '数据展示',
    type: 'component',
    children: [
      {
        title: 'Avatar 头像',
        name: 'avatar',
        path: '/components/avatar',
        component: () => import('@/avatar/avatar.md')
      },
      {
        title: 'Badge 徽标',
        name: 'badge',
        path: '/components/badge',
        component: () => import('@/badge/badge.md')
      }
    ]
  },
  {
    title: '反馈',
    type: 'component', // 组件文档
    children: []
  }
]
