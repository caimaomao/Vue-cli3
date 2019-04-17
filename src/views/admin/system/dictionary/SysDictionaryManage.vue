<template>
    <div class="box">
        <div class="left">
            <div class="anchor" v-for="(item,index) in anchorItem" :key="index" @click="jump(index)">{{item}}</div>
        </div>
        <div class="right">
            <div class="content" v-for="(item,index) in anchorContent" :key = index>{{item}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            anchorItem:['锚点一','锚点二','锚点三'],
            anchorContent:['锚点内容一','锚点内容二','锚点内容三'],
            num:0
        }
    },
    mounted:function(){
        this.$nextTick(function () {
            window.addEventListener('scroll', this.onScroll)
        })
    },
    methods:{
        jump(index){
           this.num = index;
           console.log(this.num);
           let jump = document.querySelectorAll('.content')
           let total = jump[index].offsetTop
           let distance = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
           let step = total / 50

           console.log(total)
            if (total > distance) {
                smoothDown()
            } else {
                let newTotal = distance - total
                step = newTotal / 50
                smoothUp()
            }

           function smoothDown () {
               if(distance < total){
                   distance += step
                   document.body.scrollTop = distance
                   document.documentElement.scrollTop = distance
                   window.pageYOffset = distance
                   setTimeout(smoothDown, 10)
               }else {
                   document.body.scrollTop = total
                   document.documentElement.scrollTop = total
                   window.pageYOffset = total
               }
           }

           function smoothUp () {
               if(distance < total){
                   distance -= step
                   document.body.scrollTop = distance
                   document.documentElement.scrollTop = distance
                   window.pageYOffset = distance
                   setTimeout(smoothUp, 10)
               }else {
                   document.body.scrollTop = total
                   document.documentElement.scrollTop = total
                   window.pageYOffset = total
               }
           }

        },
        onScroll () {
            let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            // 586、1063分别为第二个和第三个锚点对应的距离
            if (scrolled >= 1063) {
                this.steps.active = 2
            } else if (scrolled < 1063 && scrolled >= 586) {
                this.steps.active = 1
            } else {
                this.steps.active = 0
            }
        }
    }
}
</script>
<style scoped>
.box:before,
.box:after{
    display:table;
    content:'';
    clear:both;
}
.left{
    float:left;
    width:200px;
    background:#fff;
    height:400px;
    position:fixed;
}
.right {
    float: left;
    width: 600px;
    margin-left:210px;
}
.anchor{
    height:50px;
    margin:30px 0;
    text-align:center;
    line-height:50px;
}
.content{
    height:400px;
    border:1px solid #242f42;
}
</style>
