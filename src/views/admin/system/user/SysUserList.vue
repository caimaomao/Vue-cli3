<template>
    <div id="topBanner" style="padding-top:5px;" class="slide">
        <div v-for="(imgUrl,index) in bannerList" v-show="index === mark" :key="index" class="slideshow">
            <a href="#">
                <img :src=imgUrl style="width:100%;height:350px;">
            </a>
        </div>
        <div class="bar">
            <span v-for="(item,index) in bannerList" :class="{ 'active':index===mark }" :key="index"></span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            mark :0,
            bannerList:["http://p3.so.qhimgs1.com/t01f3c2fbbfc190da13.jpg","http://p1.so.qhimgs1.com/t01fb8af23fa1c93441.jpg","http://p0.so.qhimgs1.com/t013e7b12d08f155a4c.jpg"]
        }
    },
    mounted () {
        this.play()
    },
    methods:{
        autoPlay () {
            this.mark++;
            if (this.mark === 3) { //当遍历到最后一张图片置零
                this.mark = 0
            }
        },
        play () {
            setInterval(this.autoPlay, 2500)
        },
        change (i) {
            this.mark = i
        }
    }
}
</script>
<style scoped>
    .slide {
        width: 950px;
        height: 150px;
        margin: 0 auto;
        margin-top: 50px;
        overflow: hidden;
        position: relative;
    }
    .slideshow {
        width: 950px;
        height: 200px;
    }
    li {
        position: absolute;
    }
    img {
        width: 95px;
        height: 150px;
    }
    .bar {
        position: absolute;
        width: 100%;
        bottom: 10px;
        margin: 0 auto;
        z-index: 10;
        text-align: center;
    }
    .bar span {
        width: 20px;
        height: 5px;
        border: 1px solid;
        background: white;
        display: inline-block;
        margin-right: 10px;
    }
    .active {
        background: #bfd6b6 !important;
    }

</style>
