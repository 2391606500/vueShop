<template>
  <div id="app">
<mt-header title="vue-商城">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
</mt-header>
<router-view></router-view>
   <van-tabbar route active-color="#ee0a24" inactive-color="#000" @change="onChange">
  <van-tabbar-item replace to="/home" icon=" iconfont icon-shouye">首页</van-tabbar-item>
  <van-tabbar-item replace to="/vip" icon=" iconfont icon-huiyuan">会员</van-tabbar-item>
  <van-tabbar-item replace to="/cart" icon=" iconfont icon-gouwuche" badge="5">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/search" icon=" iconfont icon-sousuo">搜索</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default{
  data() {
    return {
    };
  },
methods:{
  onChange(index){
    console.log(index);
  }
}
}
</script>


<style lang="less" scoped>

/deep/ .mint-header-title{
font-size: 22px;
margin-top: -1px;
}
</style>
