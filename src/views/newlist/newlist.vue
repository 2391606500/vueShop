<template>
  <div>
<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
						<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time | newTime}}</span>
                <span>点击:{{item.click}}次</span>
              </p>
						</div>
					</router-link>
				</li>

			</ul>
  </div>
</template>

<script>
import {getNewlist} from '@/network/getNewlistApi.js'
// var dayjs = require('dayjs')
export default {
data(){
  return{
    newList:[]
  }
},
created(){
this.getNewList()
},
methods:{
async getNewList(){
    const {message:res}=await getNewlist()
   this.newList=res
  }
},
// filters:{ newTime(val){
//     return dayjs(val).format("YYYY-MM-DD HH:mm:ss")
//   }
// }
}
</script>

<style lang="less" scoped>
.mui-table-view{
  li{
    h1{
      font-size:14px;
      overflow:hidden;
      white-space:nowrap;
      text-overflow: ellipsis;
    }
    .mui-ellipsis{
      font-size: 12px;
      color:#226aff;
      display: flex;
justify-content: space-between;
    }
  }
}
</style>