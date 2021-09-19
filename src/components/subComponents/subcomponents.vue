<template>
  <div class="commet-containt">
 <h3>发表评论</h3>
 <hr>
 <textarea  placeholder="请输入内容（最多120字）" maxlength="120" v-model.trim="msg"></textarea>
<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
<div class="cmt-list">
  <div class="cmt-item" v-for="(item,i) in commentList" :key="i">
    <div class="cmt-title">第{{i+1}}楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:{{item.add_time | newTime}}</div>
    <div class="cmt-body">
      {{item.content}}
    </div>
  </div>
</div>
<mt-button plain size="large" type="danger" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
// import {request} from '@/network/request.js'
import {newsinfo} from '@/network/getCommentApi.js'
import { Toast } from 'mint-ui';
export default {
  props:{
id:{
  type:Number,
  default:0,
  required:true
}
  },
  data(){
    return{
      commentList:[],
      pageIndex:1,
      msg:[]
    }
  },
  created(){
    this.getComment()
    // const a=['b','a','c']
    // const b=['d','g','k']
    // const c=[...a,...b]
    // console.log(c);
   // console.log(typeof(this.pageIndex));
  },
methods:{
 async getComment(){
// const res=await request('/api/getcomments/'+this.id+'?pageindex='+this.pageIndex)
const{message:res}=await newsinfo(this.pageIndex,this.id)
this.commentList=[...this.commentList,...res]
  },
  getMore(){
    console.log('成功');
    this.pageIndex++
    this.getComment()
  },
  postComment(){
    if(this.msg.length===0){
     Toast ('评论内容不能为空')
      return 
    }
    this.$http.post('api/postcomment/'+this.id,{content:this.msg.trim()})
    .then(function(result){
      if(result.body.status===0){
        var cmt={
          add_time:new Date(),
          content:this.msg.trim()
        }
        this.commentList.unshift(cmt)
        this.msg=''
      }
    })
  }
}
}
</script>

<style lang="less" scoped>
.commet-containt {
  h3 {
font-size:18px
  }

  textarea {
font-size:14px;
height: 85px;
margin: 0;
  }
.cmt-list {
  margin: 5px 0;
   .cmt-item {
     font-size:13px;
    .cmt-title {
background-color: #ccc;
line-height: 30px;

      }

      .cmt-body {
line-height: 35px;
text-indent: 2em;
      }
    }
  }
}

</style>