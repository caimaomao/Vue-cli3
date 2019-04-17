<template>
    <div class="header">
      <div class="header-wrap">
        <el-button class="btn" size="small" @click="handleOpen">
            <i class="el-icon-menu"></i>
        </el-button>
          <div class="header-right">
              <div class="header-user-con">
                  <!-- 全屏显示 -->
                  <div class="btn-fullscreen" @click="handleFullScreen">
                      <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                          <i class="el-icon-rank"></i>
                      </el-tooltip>
                  </div>
                  <!-- 消息中心 -->
                  <div class="btn-bell">
                      <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                          <router-link to="/tabs">
                              <i class="el-icon-bell"></i>
                          </router-link>
                      </el-tooltip>
                      <span class="btn-bell-badge" v-if="message"></span>
                  </div>
                  <!-- 用户头像 -->
                  <div class="user-avator"><img src="../../../public/img/logo.svg"></div>
                  <!-- 用户名下拉菜单 -->
                  <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                       <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
import bus from '@/config/bus';
export default {
  name:'Header',
    data() {
        return {
            collapse: false,
            fullscreen: false,
            message: 2
        }
    },
    computed:{
        username(){
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods:{
        handleOpen () {
            this.$emit('changeCollapse')
        },
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if(command == 'loginout'){
                localStorage.removeItem('ms_username')
                this.$router.push('/login');
            }
        },
        // 侧边栏折叠
        collapseChage(){
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen(){
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted(){
        if(document.body.clientWidth < 1500){
            this.collapseChage();
        }
    }
}
</script>
<style>

.btn .el-icon-menu{
    width:100%;
    height:100%;
    font-size:26px;
}
.btn.el-button--small{
    padding:0;
    margin-left:10px;
}
 .header-wrap{
     width:100%;
     height:100%;
     overflow:hidden;
     /*background:yellow;*/
 }
.header-right{
    float:right;
}
.header-user-con{
    float:right;
}
.btn-fullscreen{
    float:left;
    font-size:24px;
    font-weight:700;
    transform: rotate(45deg);
    cursor:pointer;
    margin:0 20px;
}
.btn-bell{
    float:left;
    margin-right:20px;
    font-size:20px;
    font-weight:700;
}
.user-avator{
    float:left;
    width:40px;
    height:40px;
    border-radius:50%;
    border:1px solid #ccc;
    overflow:hidden;
    margin-right:20px;
    margin-top:8px;
}
.user-avator img{
    width:40px;
    height:40px;
}
.user-name{
    float:left;
    margin-right:50px;
    cursor:pointer;
}

.btn-bell{
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge{
    position: absolute;
    /*right: 0;*/
    /*top: -2px;*/
    right:2px;
    top:18px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}

</style>
