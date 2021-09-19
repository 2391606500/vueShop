<template>
  <div class="newsInfo-contain">
   <h3 class="title">{{ news.title}}</h3>
   <p class="header">
     <span>发表时间:{{news.add_time | newTime}}</span>
     <span>点击:{{news.click}}次</span>
   </p>
   <hr>
   <div class="content" v-html="news.content">
   </div>
<comment :id="news.id"></comment>
  </div>
</template>

<script>
//import {newsinfo} from "@/network/getNewInfoApi.js"
import comment from '@/components/subComponents/subcomponents.vue'
import {newinfo} from '@/network/getNewsInfoApi.js'
export default{
  props:['id'],
  components:{
comment
},
  data(){
    return{
      news:{}
    }
  },
  created(){
this.getnewsInfo()
//console.log(this.id);
  },
  methods:{
  async getnewsInfo(){
      const {message:res}=await newinfo(this.id)
     // console.log(this.id);
        // console.log(this.id);
  // this.news=res.message[0]
this.news=res[0]
    }
  }
}
</script>

<style lang="less" scoped>
.newsInfo-contain{
  padding:0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color:red;
  }
  .header{
    font-size: 13px;
    color:#22a;
    display: flex;
    justify-content: space-between;
  }
  .content{
    width: 100%;
  }
}
</style>