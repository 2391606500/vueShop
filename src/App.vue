<template>
  <div class="app-contain">
<mt-header fixed title="vue-商城">
  <span  slot="left" @click="goback" v-show="isShowBack">
    <mt-button icon="back">返回</mt-button>
  </span>
</mt-header>
<!-- 设置每个页面切换滑动效果 -->
<transition>
  <router-view class="contain"></router-view>
</transition>
   <van-tabbar route active-color="#ee0a24" inactive-color="#000">
  <van-tabbar-item replace to="/home" icon=" iconfont icon-shouye">首页</van-tabbar-item>
  <van-tabbar-item replace to="/vip" icon=" iconfont icon-huiyuan">会员</van-tabbar-item>
  <van-tabbar-item replace to="/cart" icon=" iconfont icon-gouwuche" :badge="$store.getters.getAllCount"  id="badge">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/search" icon=" iconfont icon-sousuo">搜索</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>

export default{
  data() {
    return {
      isShowBack:false
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  },
  watch:{
    '$route.path':function(newval){
if(newval==='/home'){
  this.isShowBack=false
}else{
    this.isShowBack=true
}
    }
  }
}
</script>


<style  lang="less" scoped>
.app-contain{
      overflow-x: hidden;
      padding-top:40px;
  padding-bottom:50px;

}
.mint-header{
  z-index:99;
}
/* 设置每个页面切换滑动效果  */
.v-enter
{
   overflow-x: hidden;
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
   overflow-x: hidden;
 opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
