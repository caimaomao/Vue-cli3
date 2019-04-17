export default [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/',
        component: resolve => require(['@/components/layout/Home.vue'], resolve),
        meta: { title: '自述文件' },
        children:[
            {
                path: '/dashboard',
                component: resolve => require(['./Dashboard.vue'], resolve),
                meta: { title: '系统首页' }
            }
        ]
    },
    {
        path: '/',
        component: resolve => require(['@/components/layout/Home.vue'], resolve),
        meta: { title: '自述文件' },
        children:[
            {
                path: '/tabs',
                component: resolve => require(['./message.vue'], resolve),
                meta: { title: '消息详情' }
            }
        ]
    },
    {
        path:'/login',
        component:resolve => require(['./Login.vue'],resolve),
        meta:{title:'登录页'}
    }
]
