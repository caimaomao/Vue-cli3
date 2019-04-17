<template>
    <div class="main">
        <div ref="caimaomao"
             @click="handleClick"
        >
            我是蔡毛毛
        </div>
    </div>
</template>
<script>
export default {
    name:'SysAppList.vue',
    data () {
      return {

      }
    },
    methods:{
        handleClick(){
            alert(this.$refs.caimaomao.innerHTML)
        }
    }
}
</script>
<style>

</style>
