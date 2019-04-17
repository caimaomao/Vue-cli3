<template>
    <div class="dashWrap">
        <div class="dashboard-top">
            <div class="dash-detail" style="background:#67c23a;">
                <p>总销售额</p>
                <div></div>
            </div>
            <div class="dash-detail" style="background:#e6a23c;">
                <p>访问量</p>
                <div></div>
            </div>
            <div class="dash-detail" style="background:#f56c6c;">
                 <p>支付笔数</p>
                 <div></div>
            </div>
            <div class="dash-detail dash-detail-last" style="background:#909399;">
                <p>销售总数</p>
                <div></div>
            </div>
        </div>
        <div class="dashboard-center">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="今年销售额" name="first">
                    <p style="margin-left:20px;">销售额统计</p>
                    <div id="sales" :style="{height:height,width:width}" ref="salesEchart">

                    </div>
                </el-tab-pane>
                <el-tab-pane label="本月访问量" name="second">
                    <p style="margin-left:20px;">本月访问量</p>
                    <div id="visit" :style="{height:height,width:width}" ref="visitEchart">

                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="dashboard-hot">
            <div class="hot-left">
                左
            </div>
            <div class="hot-right">
                右
            </div>
        </div>
        <div class="dashboard-bottom">
           <p style="margin:20px 0 0 20px;">全天客流量统计</p>
           <div id="people" :style="{height:height1,width:width1}" ref="peopleEchart">

           </div>
        </div>
        <div class="dashboard-main-bottom">
            <p style="margin-top:40px;">首页</p>
            <p>Copyright©2019caimaomao</p>
        </div>
    </div>
</template>
<script>
// let echarts = require('echarts/lib/echarts')
// require('echarts/lib/chart/bar')
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/toolbox')
// require('echarts/lib/component/legend')
// require('echarts/lib/component/markLine')
export default {
    name:'Dashboard',
    data () {
        return {
            activeName:'second',
            width:'100%',
            height:'300px',
            isShow:true,
            saleData:[],
            height1:'550px',
            width1:'100%'
        }
    },
    created () {
        var app = this;
        this.$ajax.get('/saleEchart').then(res=>{
            app.saleData = res.data.data;
            app.initChart()
            // console.log(app.saleData)
            // console.log(this.saleData)
        })

    },
    methods:{
        handleClick (tab,event) {
            console.log(tab,event)
        },
        initChart() {
                 let chart = this.$echarts.init(this.$refs.salesEchart);
                 chart.setOption({
                     color:['#66b1ff'],
                     tooltip:{
                         trigger: 'axis',
                         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                             type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                         }
                     },
                     grid: {
                         left: '3%',
                         right: '4%',
                         bottom: '3%',
                         containLabel: true
                     },
                     xAxis : [
                         {
                             type : 'category',
                             data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
                             axisTick: {
                                 alignWithLabel: true
                             }
                         }
                     ],
                     yAxis : [
                         {
                             type : 'value'
                         }
                     ],
                     series : [
                         {
                             name:'销售额',
                             type:'bar',
                             barWidth: '60%',
                             data:this.saleData
                         }
                     ]
                 })
        },
        initVisitChart() {
            let visitEchart = this.$echarts.init(this.$refs.visitEchart);
            visitEchart.setOption({
                color:['#66b1ff'],
                tooltip:{
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1日', '2日', '3日', '4日', '5日', '6日', '7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'销售额',
                        type:'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220,100,150,230,210,190,10, 52, 220,100,150,230,210,190,200, 334, 390, 330,220,100,150,230,210,190]
                    }
                ]
            })
        },
        initPeopleChart(){
            let peopleEchart = this.$echarts.init(this.$refs.peopleEchart);
            peopleEchart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['客流量','花费额']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00', '21:00','22:00','23:00','24:00'
                    ]
                },
                yAxis: {
                    type: 'value'
                },
                color:['#08979c','#c41d7f'],//修改legend的颜色
                series: [
                    {
                        name:'客流量',
                        type:'line',
                        itemStyle : {
                            normal : {
                                lineStyle:{
                                    color:'#08979c'//修改折线的颜色
                                }
                            }
                        },
                        data:[230, 210,220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182,220]
                    },
                    {
                        name:'花费额',
                        type:'line',
                        itemStyle : {
                            normal : {
                                lineStyle:{
                                    color:'#c41d7f'
                                }
                            }
                        },
                        data:[220, 182, 191, 234, 290, 330, 310,282, 191, 234, 290, 330, 310,220, 222, 382, 211, 234, 240, 310, 230,282, 191,150]
                    }
                ]
            })
        },
        init() {
            const self = this;//因为箭头函数会改变this指向，指向windows。所以先把this保存
            setTimeout(() => {
                window.onresize = function() {
                    self.chart = this.$echarts.init(self.$refs.saleEchart);
                    self.chart.resize();
                }
            },20)
        }
    },
    mounted(){
        this.initChart();
        this.initVisitChart();
        this.initPeopleChart();
        this.init()
    }
}
</script>
<style scoped>
.dashWrap{
    flex:1;
    /*background:#fff;*/
    width:100%;
    overflow-y:auto;
    display:flex;
    flex-direction: column;
}
.dashboard-top{
  flex:0 0 180px;
  /*background:#fff;*/
  display:flex;
    margin:10px;
}
.dash-detail{
    flex:1;
    background:#fff;
    margin-right:20px;
    padding:20px;
    font-weight:500;
    border-radius:5px;
    box-shadow:0 0 3px #ccc;
    color:#242f42;
}
.dash-detail-last{
    margin-right:0;
}
.dashboard-center{
    flex:0 0 400px;
    background:#fff;
    margin:10px;
    padding:10px;
}
.dashboard-hot{
    flex:0 0 500px;
    margin:10px;
    display:flex;
}
.hot-left{
    flex:1;
    background:#fff;
    margin-right:20px;
}
.hot-right{
   flex:1;
   background:#fff;
}
.dashboard-bottom{
    flex:0 0 600px;
    background:#fff;
    margin:10px;
}
.dashboard-main-bottom{
    flex:0 0 150px;
    text-align:center;
}
.dashboard-main-bottom p{
    line-height:40px;
}
</style>
