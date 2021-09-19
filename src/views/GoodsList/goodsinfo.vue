<template>
  <div class="goodsinfo-contain">
  <transition @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter">
      <div class=" ball" v-show='ballflag' ref="ball"></div>
  </transition> 
  <!-- 商品轮播图 -->
  <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<swiper :swiperList="goodsinfo" :isfull="true"></swiper>
					</div>
				</div>
			</div>
  <!-- 商品购买 -->
  <div class="mui-card">
				<div class="mui-card-header">{{goods.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
				<p class="price">
          市场价:<del>￥{{goods.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now-price">￥{{goods.sell_price}}</span>
        </p>
        <p>购买数量:
          	<span class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="sub" :disabled='isdisabledsub'>-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="currentnummber" ref="inputnumber"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="add" :disabled='isdisabledadd'>+</button>
				</span>
        </p>
        <p class="buy-button">
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addtoshopcart">加入购物车</mt-button>
        </p>
					</div>
				</div>
  </div>
  <!-- 商品参数 -->
  	<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
				<p>商品货号：{{goods.goods_no}}</p>
				<p>库存情况：{{goods.stock_quantity}}件</p>
				<p>上架时间：{{goods.add_time | newTime}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
        </div>
			</div>
  </div>
</template>

<script>
import {photo} from '@/network/getPhoto.js'
import {getGoodsinfo} from '@/network/getGoodsInfo.js'

import swiper from '../../components/swiper/swiper.vue'

export default {
  components: { swiper },
  data(){
   return{
      goodsinfo:[],
      id:this.$route.params.id,
      goods:{},
      ballflag:false,
      currentnummber:1,
      isdisabledadd:false,
      isdisabledsub:false,
   }
  },
  created(){
this.getgoodsinfo()
this.getgoodsInfo()
  },
methods:{
 async getgoodsinfo(){
    const {message:res}=await photo(this.id)
  res.forEach(item=>{
    item.img=item.src
  })
  this.goodsinfo=res
  },
  async getgoodsInfo(){
    const {message:res}=await getGoodsinfo(this.id)
   this.goods=res[0]
},
goDesc(id){
  this.$router.push('/home/goodsdesc/'+id)
},
goComment(id){
  this.$router.push({name:"goodscomment",params:{id}})
},
addtoshopcart(){
  this.ballflag=!this.ballflag
 this.currentnummber=parseInt(this.$refs.inputnumber.value)
 const goodsinfo={id:this.id,count:this.currentnummber,price:this.goods.sell_price,selectd:true}
 this.$store.commit('addtocar',goodsinfo)

},
add(){
  if(this.currentnummber<this.goods.stock_quantity){
  this.currentnummber++
  }else{
     this.isdisabledadd=true
  }
this.isdisabledsub=false},
sub(){
  if(this.currentnummber>1){
 this.currentnummber--
  // this.isdisabled=false
  }else{
    this.isdisabledsub=true
  }
  this.isdisabledadd=false
},
beforeEnter(el){
  el.style.transform="translate(0,0)"
},
enter(el,done){
  const ballposition = this.$refs.ball.getBoundingClientRect();
  const badgeposition = document.getElementById('badge').getBoundingClientRect()
  //获取徽标在页面中的位置
  const currentpositionx=badgeposition.left - ballposition.left +45
  const currentpositiony=badgeposition.top - ballposition.top 

  el.offsetWidth;
  el.style.transform=`translate(${currentpositionx}px,${currentpositiony}px)`
  el.style.transition='all 0.5s ease'
  done()
},
afterEnter(el){
    this.ballflag=!this.ballflag
}
}}
</script>

<style lang="less" scoped>
.ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top:322px;
  left:142px;
  background-color: red;
  z-index: 999;
}
.buy-button button:last-child{
  margin-left:10px ;
}
.now-price{
  color:red;
  font-size:16px;
  font-weight: 700;
}
.mui-card-footer{
  display: block;
  button{
    margin: 15px 0;
  }
}
</style>