<template>
   <div class="main">
       <div class="topTool">
           <div id="xd-tool-bar">
               <!-- 左侧按钮 -->
               <div style="float: left;padding: 5px;">
                   <el-button type="primary" size="mini">
                       新增
                   </el-button>
               </div>
               <!-- 右侧搜索 -->
               <div id="xd-tool-bar-search-bar" v-if="searchable" style="float: right;text-align: right">

               </div>
           </div>
       </div>
       <div class="flex-table">
         <div class="flex-table-wrap" style="">
             <el-table
                     v-loading="loading"
                     ref="multipleTable"
                     :data="tableData3"
                     tooltip-effect="dark"
                     style="width: 100%;height:100%;"
                    >
                 <el-table-column
                         type="selection"
                         width="100px">
                 </el-table-column>
                 <el-table-column
                         label="日期"
                         width="200px">
                     <template slot-scope="scope">{{ scope.row.date }}</template>
                 </el-table-column>
                 <el-table-column
                         prop="name"
                         label="姓名"
                         width="200px">
                 </el-table-column>
                 <el-table-column
                         prop="address"
                         label="地址"
                         show-overflow-tooltip>
                 </el-table-column>
                 <el-table-column
                         label="日期"
                         width="200px">
                     <template slot-scope="scope">{{ scope.row.date }}</template>
                 </el-table-column>
                 <el-table-column
                         prop="name"
                         label="姓名"
                         width="200px">
                 </el-table-column>
                 <el-table-column
                         prop="address"
                         label="地址"
                         show-overflow-tooltip>
                 </el-table-column>
                 <el-table-column
                         label="日期"
                         width="200px">
                     <template slot-scope="scope">{{ scope.row.date }}</template>
                 </el-table-column>
                 <el-table-column
                         prop="name"
                         label="姓名"
                         width="200px">
                 </el-table-column>
                 <el-table-column
                         prop="address"
                         label="地址"
                         show-overflow-tooltip>
                 </el-table-column>
                 <el-table-column
                         label="日期"
                         width="200px">
                     <template slot-scope="scope">{{ scope.row.date }}</template>
                 </el-table-column>
                 <el-table-column
                         prop="name"
                         label="姓名"
                         width="200px">
                 </el-table-column>
                 <el-table-column
                         prop="address"
                         label="地址"
                         width="200px"
                         show-overflow-tooltip>
                 </el-table-column>
             </el-table>
         </div>
       </div>
       <div class="bottomPagination">
          <div class="xd-pagination">
               <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
          </el-pagination>
          </div>
       </div>
   </div>
</template>
<script>
  export default {
     name:'SysExceptionLogList',
     // created () {
     //     this.$ajax.get('/page').then((res)=>{
     //           console.log(res);
     //     })
     // },
     data() {
          return {
              currentPage:1,
              tableData:[
              ],
              tableData3: [
              ],
              loading:true
          }
      },
      computed: {

      },
      methods: {
          handleSizeChange(val) {
              console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
              console.log(`当前页: ${val}`);
          }
      },
      mounted () {
         this.$ajax.get('/page').then((res)=>{
             if(res.status==200 && res.statusText=="OK"){
                if(res.data.success == true){
                    var app = this;
                    app.tableData3 = res.data.data.dataList
                    this.loading = false;
                }
             }
             //console.log(res)
         }).catch((err) => {
             console.log('网络连接失败',err)
         })
      }
  }
</script>
<style>
    .page{
        text-align: right;
        padding: 10px 5px;
    }
    .topTool{
        flex:0 0 30px;
        margin-bottom: 15px;
    }
    .flex-table .el-table{
        display: flex;
        flex-direction: column;
        height:100%;
    }
    .flex-table .el-table__body-wrapper{
        flex:1;
        overflow-y:auto;
    }
    .flex-table{
        flex:1;
        overflow-y:auto;
        display:flex;
        padding:0;
        background:pink;
        position:relative;
    }
    .flex-table-wrap{
        position:absolute;
        background:#ccc;
        width:100%;
        height:100%;
    }
    .bottomPagination{
        flex:0 0 40px;
    }
    .xd-pagination{
        text-align:right;
        padding:10px;
    }

    #xd-tool-bar .el-form-item{
        margin-bottom: 0;
    }

    #xd-tool-bar-search-bar .el-form-item{
        margin-bottom: 0;
    }
</style>
