<template>
  <div class="goodsdesc-containt">
    <h3>{{goodsdesc.title}}</h3>
    <hr>
    <div class="content" v-html="goodsdesc.content"></div>
  </div>
</template>

<script>
import {goodsdesc} from '@/network/getGoodsDescApi.js'
export default {
data(){
  return{
    goodsdesc:[],
     id:this.$route.params.id
  }
},
created(){
this.getgoodsdesc()
},
methods:{
 async getgoodsdesc(){
    const {message:res}=await goodsdesc(this.id)
this.goodsdesc=res[0]
  }
}
}
</script>

<style lang="less" >
.goodsdesc-containt{
  padding:4px;
  h3{
    font-size:16px;
    color:#226aff;
    text-align: center;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>