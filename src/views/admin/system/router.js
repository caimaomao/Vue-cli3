export default [
    {
       path:'/app',
       component: resolve => require(['../../../components/layout/Home.vue'], resolve),
       children:[
          {
              path: '',
              component: resolve => require(['./appmanage/SysAppList.vue'], resolve),
              meta: { title: 'App管理' }
          }
       ]
    },
    {
        path:'/direction',
        component: resolve => require(['../../../components/layout/Home.vue'], resolve),
        children:[
            {
                path: '',
                component: resolve => require(['./dictionary/SysDictionaryManage.vue'], resolve),
                meta: { title: '字典管理' }
            }
        ]
    },
    {
        path:'/druid',
        component: resolve => require(['../../../components/layout/Home.vue'], resolve),
        children:[
            {
                path: '',
                component: resolve => require(['./druid/DruidMonitor.vue'], resolve),
                meta: { title: 'Druid监控' }
            }
        ]
    },
    {
        path:'/user',
        component: resolve => require(['../../../components/layout/Home.vue'], resolve),
        children:[
            {
                path: '',
                component: resolve => require(['./user/SysUserList.vue'], resolve),
                meta: { title: '用户管理' }
            }
        ]
    },
    {
        path:'/role',
        component: resolve => require(['../../../components/layout/Home.vue'], resolve),
        children:[
            {
                path: '',
                component: resolve => require(['./role/SysRoleList.vue'], resolve),
                meta: { title: '角色管理' }
            }
        ]
    },
    {
        path:'/message',
        component: resolve => require(['../../../components/layout/Home.vue'], resolve),
        children:[
            {
                path: '',
                component: resolve => require(['./notice/SysNoticeManage.vue'], resolve),
                meta: { title: '消息管理' }
            }
        ]
    },
    {
        path:'/loginlog',
        component: resolve => require(['../../../components/layout/Home.vue'], resolve),
        children:[
            {
                path: '',
                component: resolve => require(['./loginlog/SysLoginLogList.vue'], resolve),
                meta: { title: '登录日志' }
            }
        ]
    },
    {
        path:'/managelog',
        component: resolve => require(['../../../components/layout/Home.vue'], resolve),
        children:[
            {
                path: '',
                component: resolve => require(['./operationlog/SysOperationLogList.vue'], resolve),
                meta: { title: '操作日志' }
            }
        ]
    },
    {
        path:'/errlog',
        component: resolve => require(['../../../components/layout/Home.vue'], resolve),
        children:[
            {
                path: '',
                component: resolve => require(['./exceptionlog/SysExceptionLogList.vue'], resolve),
                meta: { title: '异常日志' }
            }
        ]
    }
]
