<template>
  <div>
      <mt-swipe :auto="4000" >
  <mt-swipe-item v-for="item in swiperList" :key="item.id">
    <img :src="item.img" alt="" :class="{full:isfull}">
  </mt-swipe-item>
</mt-swipe>
  </div>
</template>

<script>
export default {
props:{
  swiperList:{
    type:Array,
    default:[]
  },
  isfull:{
    type:Boolean,
    default:true
  }
}
}
</script>

<style lang="less" scoped>
// .mint-swipe{
//   height: 133px;
//   .mint-swipe-item{
//   img{
//     // width: 320px;
//     width: 100%;
//     height: 100%;
//     // height: 133px;
//   }
//   }
// }
.mint-swipe{
  height: 133px;
}
img{
  width: 100%;
  height: 100%;
}
.full{
width: 100%;
}
</style>