<template>
  <div class="photoinfo-contain">
      <h3 class="title">{{photoinfo.title}}</h3>
   <p class="header">
     <span>发表时间:{{photoinfo.add_time}}</span>
     <span>点击:{{photoinfo.click}}次</span>
   </p>
   <hr>
   <div class="content" v-html="photoinfo.content">
   </div>
   <!-- <img class="preview-img" v-for="(item,i) in photolist" :src="item.src" height="100" @click="$preview.open(index,photolist)" :key="item.src"> -->
      <vue-preview  :slides="photolist"></vue-preview>
<comment :id="id"></comment>
  </div>
</template>

<script>
import {photoinfo} from '@/network/getPhotoinfoApi.js'
import comment from '@/components/subComponents/subcomponents.vue'
import {photo} from '@/network/getPhoto.js'
export default {
  components:{
    comment 
  },
  data(){
    return{
      id:parseInt(this.$route.params.id),
      photoinfo:{},
      photolist:[],
    }
  },
  created(){
    this.getPhotoinfo()
   // console.log(typeof(this.id));
   this.getphoto()
  },
methods:{
  async getPhotoinfo(){
const {message:res}=await photoinfo(this.id)
this.photoinfo=res[0]
  },
 async getphoto(){
const res=await photo(this.id)
console.log(res);
if(res.status===0){
 res.message.forEach(item=>{
    item.w=600;
    item.h=400;
    item.msrc=item.src;
  })
  this.photolist=res.message
}
  }
}
}
</script>

<style lang="less" scoped>
.photoinfo-contain{
  padding:0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color:#26A2FF;
  }
  .header{
    font-size: 13px;
    color:#22a;
    display: flex;
    justify-content: space-between;
  }
  .content{
  font-size: 13px;
  line-height: 30px;
  }
}
  /deep/ img{
  width: 60px;
  height: 60px;
}
/deep/ .my-gallery{
// display: inline-block;
display: flex;
flex-wrap: wrap;
 /deep/ figure{
    width: 40px;
    height:40px;
    flex:1;
  }
}
</style>