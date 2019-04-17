<template>
    <div class="main">
        <iframe :src="src" width="99.7%" :height="height" scrolling="auto">

        </iframe>
    </div>
</template>

<script>
    export default {
        name: "DruidMonitor",
        // 其他组件依赖
        components: {},
        //数据模版
        data() {
            return {}
        },
        //组件属性
        props: {},
        // 计算属性
        computed: {
            src: function () {
                // return this.$ajax.defaults.baseURL + '/druid';
            },
            height: function () {
                return (document.body.clientHeight - 106 - 30) + 'px';
            }
        },
        // 组件监听
        watch: {},
        // 组件方法
        methods: {},
        // 生命周期函数：组件创建前
        beforeCreate: function () {
        },
        // 生命周期函数：组件创建后
        created: function () {
        },
        // 生命周期函数：组件挂载完毕前
        beforeMount: function () {
        },
        // 生命周期函数：组件挂载完毕后
        mounted: function () {
        },
        // 生命周期函数：组件更新前
        beforeUpdate: function () {
        },
        // 生命周期函数：组件更新后
        updated: function () {
        },
        // 生命周期函数：组件销毁前
        beforeDestroy: function () {
        },
        // 生命周期函数：组件销毁后
        destroyed: function () {
        }
    }
</script>

<style scoped>

</style>
