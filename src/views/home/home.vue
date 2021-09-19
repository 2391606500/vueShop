<template>
  <div>
  <swiper :swiperList="swiperList" :isfull="false"></swiper>
<van-grid  :column-num="3" square >
  <van-grid-item to="/home/newlist">
      <img src="@/img/menu1.png" alt="">
     <span>新闻资讯</span>
  </van-grid-item>
  <van-grid-item to="/home/photolist">
    <img src="@/img/menu2.png" alt="">
  <span>图片分享</span>
  </van-grid-item>
  <van-grid-item to="/home/goodslist">
      <img src="@/img/menu3.png" alt="">
  <span>商品购买</span>
  </van-grid-item>
  <van-grid-item  >
     <img src="@/img/menu4.png" alt="">
  <span>留言反馈</span>
  </van-grid-item>
  <van-grid-item >
     <img src="@/img/menu5.png" alt="">
  <span>视频专区</span>
  </van-grid-item>
  <van-grid-item >
      <img src="@/img/menu6.png" alt="">
  <span>联系我们</span>
  </van-grid-item>
</van-grid>
  </div>
</template>

<script>
import {getHomeApi} from '@/network/getHomeApi.js'

import { Toast } from 'mint-ui'

import swiper from '@/components/swiper/swiper.vue'

export default {
  components:{
    swiper
  },
data(){
  return{
    swiperList:[]
  }
},
created(){
  this.getSwiperList()
},
methods:{
 async getSwiperList(){
    // this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
    //   console.log(result.body);
    // })
    const res=await getHomeApi()
    if(res.status===0){
      this.swiperList=res.message
    }else{
      Toast('加载轮播图失败...');
    }
  }
}
}
</script>

<style lang="less" scoped>
 .van-grid-item {
   img{
     width: 60px;
     height: 60px;
   }
   span{
     font-size:12px;
     padding-top: 10px;
   }
 }
</style>