<template>
  <div class="main">
     <!--<ul>-->
         <!--<li v-for="(item,index) in navList" :class="{active:index ==num}" @click="tab(index)">-->
             <!--{{item}}{{index}}-->
         <!--</li>-->
     <!--</ul>-->
     <!--<div class="tabCon">-->
         <!--<div v-for="(itemCon,index) in tabContents" v-show="index == num">-->
             <!--{{itemCon}}{{index}}-->
         <!--</div>-->
     <!--</div>-->
     <ul class="nav">
         <li v-for="(item,index) in navList" :class = "{active:!(index-menuIndex)}" @click = 'menuShow(index)'><a
                 href="#">{{item}}</a></li>
     </ul>
      <div v-show = 'menuIndex == 0'>内容一</div>
      <div v-show = 'menuIndex == 1'>内容二</div>
      <div v-show = 'menuIndex == 2'>内容三</div>
  </div>
</template>
<script>
export default {
  data () {
      return {
        menuIndex:0,
        navList:['tab1','tab2','tab3'],
        tabContents:['内容一','内容二','内容三'],
        num:0
      }
  },
  methods:{
      tab (index){
          this.num = index
      },
     menuShow (index) {
         this.menuIndex = index
         console.log(this.menuIndex)
     }
  }
}
</script>
<style scoped>
ul li{
    list-style:none;
    display:inline-block;
    border:1px solid #ccc;
    height:30px;
    line-height:30px;
    width:120px;
    text-align:center;
}
</style>
