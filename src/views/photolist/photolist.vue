<template>
  <div>
<van-tabs v-model="active" border title-active-color="blue" animated @click="getlist">
  <van-tab title="全部">
    <ul class="photo-list">
  <router-link :to="'/home/photoinfo/'+item.id" v-for="item in list" :key="item.id" tag="li">
    <img v-lazy="item.img_url">
     <div class="info">
      <div class="title">
        {{item.title}}
      </div>
      <div class="body">
        {{item.zhaiyao}}
      </div>
    </div>
  </router-link >
</ul>
  </van-tab>
  <van-tab v-for="item in photolist" :key="item.id" :title="item.title" :name="item.id" >
    <ul class="photo-list">
  <router-link :to="'/home/photoinfo/'+item.id" v-for="item in list" :key="item.id" tag="li">
    <img v-lazy="item.img_url">
    <div class="info">
      <div class="title">
        {{item.title}}
      </div>
      <div class="body">
        {{item.zhaiyao}}
      </div>
    </div>
  </router-link>
</ul>
  </van-tab>
</van-tabs>
</div>
</template>

<script>
import {photolist} from '@/network/getPhotolistApi.js'
import {list} from '@/network/getList.js'
export default {
data(){
  return{
    active:0,
    photolist:[],
    list:[]
  }
},
created(){
  this.getphotolist()
  this.getlist(0)

},
methods:{
 async getphotolist(){
    const {message:res}=await photolist()
   this.photolist=res
  },
   async getlist(listId){
    const {message:res}=await list(listId)
   this.list=res
  },
}
}
</script>

<style lang="less" scoped>
    /deep/  .van-tabs__line {
        background-color: #fff;

      }
.photo-list{
  margin: 0;
  padding-bottom:0;
}
li{
  text-align: center;
  margin-bottom: 10px;
   padding:0 10px;
   position: relative;
    img{
 width: 100%;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
}
.info{
  color:#fff;
  text-align: left;
  position: absolute;
  bottom: 0;
  max-height: 84px;
  background-color: rgba(0,0,0,0.4);
  overflow: hidden;
  .title{
    font-size:14px;
  }
  .body{
    font-size:13px;
  }
}
</style>