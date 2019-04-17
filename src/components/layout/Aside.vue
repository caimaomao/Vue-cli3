<template>
    <div class="aside" style="width:200px;">
        <div class="logo" style="height:60px;background:#002140;font-size:0;">
            <img src="../../../public/img/logo.svg" alt=""><span class="cai">caimaomao</span>
        </div>
        <el-menu
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                background-color="#242f42"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">
                                    <i :class="subItem.icon"></i><span slot="title">{{ subItem.title }}</span>
                                    {{ subItem.title }}
                                </template>
                                <!--三级菜单-->
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>
export default {
   name:'Aside',
   props:{
       isCollapse:{
           type:Boolean,
           default:false
       }
   },
   data () {
       return {
           // isCollapse: false
           items: [
               {
                   icon: 'el-icon-star-on',
                   index: 'dashboard',
                   title: '系统首页'
               },
               {
                   icon: 'el-icon-tickets',
                   index: '3',
                   title: '系统设置',
                   subs: [
                       {
                           icon: 'el-icon-tickets',
                           index: 'role',
                           title: '角色管理'
                       },
                       {
                           index: 'user',
                           title: '用户管理'
                       },
                       {
                           index:'direction',
                           title:'字典管理'
                       },
                       {
                           index:'message',
                           title:'消息管理'
                       },
                       {
                           index:'app',
                           title:'App管理'
                       },
                       {
                           index:'loginlog',
                           title:'登录日志'
                       },
                       {
                           index:'managelog',
                           title:'操作日志'
                       },
                       {
                           index:'errlog',
                           title:'异常日志'
                       },
                       {
                           index:'druid',
                           title:'Druid监控'
                       }
                   ]
               },
               {
                   icon: 'el-icon-tickets',
                   index: '2',
                   title: '错误页',
                   subs: [
                       {
                           icon: 'el-icon-tickets',
                           index: 'err404',
                           title: '404'
                       },
                       {
                           icon: 'el-icon-tickets',
                           index: 'err403',
                           title: '403'
                       },
                       {
                           icon: 'el-icon-tickets',
                           index: 'err500',
                           title: '500'
                       }
                   ]
               }
           ]
       }
   },
   computed :{
       onRoutes(){
           return this.$route.path.replace('/','');
       }
   }
}
</script>
<style>

</style>
