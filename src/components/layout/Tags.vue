<template>
  <div class="tags-wrap">
    <div class="tags" v-if="showTags">
        <ul class="tags-ul">
            <li class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
                <router-link :to="item.path" class="tags-li-title">
                    {{item.title}}
                </router-link>
                <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
            </li>
        </ul>
        <div class="tags-close-box">
            <el-dropdown @command="handleTags">
                <el-button size="mini" type="primary">
                    标签选项<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                    <!--<el-dropdown-item command="all">关闭所有</el-dropdown-item>-->
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
  </div>
</template>
<script>
    import bus from '../../config/bus';
    export default {
        name:'Tags',
        data() {
            return {
                tagsList: []
            }
        },
        methods: {
            isActive(path) {
                return path === this.$route.fullPath;
            },
            // 关闭单个标签
            closeTags(index) {
                const delItem = this.tagsList.splice(index, 1)[0];
                const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
                if (item) {
                    delItem.path === this.$route.fullPath && this.$router.push(item.path);
                }else{
                    this.$router.push('/');
                }
            },
            // 关闭全部标签
            closeAll(){
                this.tagsList = [];
                this.$router.push('/');
            },
            // 关闭其他标签
            closeOther(){
                const curItem = this.tagsList.filter(item => {
                    return item.path === this.$route.fullPath;
                })
                this.tagsList = curItem;
            },
            // 设置标签
            setTags(route){
                const isExist = this.tagsList.some(item => {
                    return item.path === route.fullPath;
                })
                !isExist && this.tagsList.push({
                    title: route.meta.title,
                    path: route.fullPath,
                    name: route.matched[1].components.default.name
                })
                bus.$emit('tags', this.tagsList);
            },
            handleTags(command){
                command === 'other' ? this.closeOther() : this.closeAll();
            }
        },
        computed: {
            showTags() {
                return this.tagsList.length > 0;
            }
        },
        watch:{
            $route(newValue, oldValue){
                this.setTags(newValue);
            }
        },
        created(){
            this.setTags(this.$route);
        }
    }

</script>
<style>
.tags{
    position:relative;
    width:100%;
    height:40px;
    line-height:40px;
    overflow:hidden;
    box-shadow:0 0 2px #ccc;
}
.tags-ul{
    float:left;
    width:100%;
    height:100%;
}
.tags-li{
    float:left;
    padding:0 10px;
    border-radius:5px;
    background:#e8e8e8;
    color:#000;
    height:30px;
    line-height:30px;
    font-size:0;
    margin-left:8px;
    margin-top:6px;
    cursor:pointer;
}
.tags-li.active{
    background:#4098ff;
    color:#fff;
}
.tags-li.active .tags-li-title{
    color:#fff;
}
.tags-li-title{
    display:inline-block;
    color:#000;
    vertical-align:middle;
    font-size:12px;
}
.tags-li-icon{
    display:inline-block;
    vertical-align:middle;
    font-size:12px;
    margin-left:3px;
}
.tags-close-box{
    position:absolute;
    right:0;
    top:0;
    width:110px;
    padding-left:10px;
    box-shadow:0px 0px 20px #ccc;
}

</style>
