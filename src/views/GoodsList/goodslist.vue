<template>
  <div class="goodslist-contain" >
   <router-link :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="(item,index) in goodslist" :key="index">
     <img :src="item.img_url" alt="">
     <h1 class="title">{{item.title}}</h1>
     <div class="info">
       <p class="price">
         <span class="now">￥{{item.sell_price}}</span>
         <span class="old">￥{{item.market_price}}</span>
       </p>
       <p class="sell">
         <span>热卖中</span>
         <span>剩{{item.stock_quantity}}件</span>
       </p>
     </div>
   </router-link>
   <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {getgoodslist} from '@/network/getGoodsListApi.js'
import { Toast } from 'mint-ui';
export default {
  data(){
return{
  goodslist:[],
  pageindex:1
}
  },
  created(){
this.getGoodslist()
//console.log(1);
  },
methods:{
 async getGoodslist(){
    const {message:res}=await getgoodslist(this.pageindex)
  this.goodslist=[...this.goodslist,...res]
  },
  getMore(){
    if(this.pageindex<2){
    this.pageindex++
    this.getGoodslist()
    }
    else{
      Toast('没有更多了')
    }
  }
  // getMore(id){
  //   this.router.push('home/goodsinfo/'+id)
  // }
}
}
</script>

<style lang="less" scoped>
.goodslist-contain{
    background-color: #fff;
  padding:7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-item{
    box-shadow:0 0 8px #ccc ;
    border: 1px solid #ccc;
    margin: 4px 0;
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img{
      width: 100%;
    }
    .title{
      font-size:14px;
    }
    .info{
      background-color: #eee;
      margin: 2px;
     p{
       margin: 0;
       padding:5px;
     }
      .price{
        .now{
          font-size:16px;
          color:red;
          font-weight: 700;
        }
        .old{
          text-decoration: line-through;
          font-size:12px;
          margin-left:10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>