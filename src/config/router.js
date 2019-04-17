import Vue from 'vue';
import Router from 'vue-router';
import mainRouter from '@/views/main/router'
import adminSystemRouter from '@/views/admin/system/router'

Vue.use(Router);
let routes = [
    ...mainRouter,
    ...adminSystemRouter
]
export default new Router({
    routes
//     routes: [
//         {
//             path: '/',
//             redirect: '/dashboard'
//         },
//         {
//             path: '/',
//             component: resolve => require(['../components/layout/Home.vue'], resolve),
//             meta: { title: '自述文件' },
//             children:[
//                 {
//                     path: '/dashboard',
//                     component: resolve => require(['../views/main/Dashboard.vue'], resolve),
//                     meta: { title: '系统首页' }
//                 }
//             ]
//         }
//         // {
//         //     path: '/',
//         //     component: resolve => require(['../components/layout/Home.vue'], resolve),
//         //     meta: { title: '自述文件' },
//         //     children:[
//         //         {
//         //             path: '/app',
//         //             component: resolve => require(['../views/admin/system/appmanage/SysAppList.vue'], resolve),
//         //             meta: { title: 'App管理' }
//         //         }
//         //     ]
//         // }
//     ]
})
