<template>
    <div class="wrapper">
        <main-aside :isCollapse="collapse"></main-aside>
        <div class="content-wrap">
            <top-header @changeCollapse="handleChangeCollapse"></top-header>
            <main-tags></main-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import bus from '../../config/bus';
import MainAside from './Aside.vue'
import TopHeader from './Header.vue'
import MainTags from "./Tags";
export default {
   name:'Home',
   components:{
       MainTags,
       MainAside,
       TopHeader
   },
   data () {
       return {
           collapse:false
       }
   },
   created() {
       // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
       bus.$on('tags', msg => {
           let arr = [];
           for(let i = 0, len = msg.length; i < len; i ++){
               msg[i].name && arr.push(msg[i].name);
           }
           this.tagsList = arr;
       })
   },
   methods:{
       handleChangeCollapse () {
           this.collapse = !this.collapse;
           if(this.collapse) {
               document.getElementsByClassName('aside')[0].style.width = 64 + 'px';
           }else{
               document.getElementsByClassName('aside')[0].style.width = 200 + 'px';
           }
       }
   }
}
</script>
<style>

</style>
