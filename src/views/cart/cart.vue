<template>
  <div class="cart-containt">
    <div  v-for="(item,index) in goodslist" :key="item.id" class="cart-content">
       <van-checkbox v-model="$store.getters.getGoodsSelected[item.id]" @click="slectedChange(item.id,$store.getters.getGoodsSelected[item.id])"
       ></van-checkbox>
<van-card
  :num="$store.getters.getGoodsCount[item.id]"
  :price="item.sell_price"
  :title="item.title"
  :thumb="item.thumb_path"
>
  <template #footer>
     <div class="delect">
     <a href="#"  @click.prevent="deleteGood(item.id,index)">删除</a>
  </div>
    <div>
    <button @click="add(item.id)" :disabled="isdisabledadd">+</button>
    <input type="text" :value="$store.getters.getGoodsCount[item.id]" readonly >
    <button @click="sub(item.id)" :disabled="isdisabledsub">-</button>
    </div>
  </template>
</van-card>
    </div>
    <div class="cartfooter">
      <div class="left">
           <input type="checkbox" @change="stateChange" :checked="$store.getters.allstate"><span>全选</span>
           </div>
      <div class="right">
         <div class="item">
        <p>总计(不含运费)</p>
        <p>已勾选商品：<span class="red">{{$store.getters.getGoodsCountAmount.count}}</span>件，总价 ￥<span class="red">{{$store.getters.getGoodsCountAmount.amount}}</span>元</p>
      </div>
      <mt-button type="danger" class="tobuy">去结算</mt-button>
      </div>
     
    </div>
  </div>

</template>

<script>
import {goodsLists} from '@/network/getGoodsLists.js'
export default {
data(){
  return{
    goodslist:[],
     checked: true,
     isdisabledadd:false,
     isdisabledsub:false,
     isdisabled:{}
  }
},
created(){
this.getGoodsList()
},
methods:{
 async getGoodsList(){
  let idArr=[]
  this.$store.state.car.forEach(item=>{
    idArr.push(item.id)
  })
  idArr=idArr.join(",")
  if(idArr.length<=0){
    return;
  }
  const {message:res}=await goodsLists(idArr)
this.goodslist=res
  },
  add(id){
      this.isdisabled={isdisabledadd:this.isdisabledadd,isdisabledsub:this.isdisabledsub,id:id}
this.$store.commit('add',this.isdisabled)
  },
  sub(id){
    this.isdisabled={isdisabledadd:this.isdisabledadd,isdisabledsub:this.isdisabledsub,id:id}
this.$store.commit('sub',this.isdisabled)
  },
  deleteGood(id,i){
this.goodslist.splice(i,1);
this.$store.commit('deleteGoods',id)
  },
  slectedChange(id,a){
   this.$store.commit('updateGoodsSelected',{id:id,selectd:a})
  },
  stateChange(e){
    this.$store.commit('statechange',e.target.checked)
  }
}
}
</script>

<style lang="less" scoped>
.cart-containt{
  padding-bottom: 90px;
  padding-left:3px;
  background-color: #fff;
  .cart-content{
    display: flex;
    justify-content: space-between;
     .van-card__content{
       padding-top:10px;
     .van-card__title {
  font-size:16px;
}
  }
  .van-card__bottom{
  line-height:34px;
}
  }
 
 .cartfooter{
   padding-top:20px;
   background-color: #fff;
  position: fixed;
   bottom: 0;
   left:0;
   z-index: 9999;
   margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
.left{    
     font-size:15px;
      margin-top:10px ;
input{
   vertical-align: middle;
      width: 20px;
    height: 20px;
    margin-left: 10px;
    span{
          line-height: 20px;
       
    }
   }
  }
  .right{
     display: flex;
  justify-content: space-between;
  align-items: center;
   .red{
    color:red;
  }
  }
}
}
.van-card{
  border: 1px solid #ddd;
  width: 350px;
  background-color: #fff;
  .van-card__price{
  color:red;
}
}
.van-card__footer{
  display: flex;
  justify-content: space-between;
  // vertical-align: middle;
  // button{
  //   margin: 0;
  // }
  button{
  width: 30px;
  height: 30px;
}
input{
  width: 40px;
  height: 30px;
  margin: 0;
  margin-left:3px;
  margin-right:3px;
  padding:0;
  text-align: center;
}
.delect{
  padding-top:10px;
  padding-left:15px;
}

}


</style>