<template>
  <div>
    <comment :id="id"></comment>
  </div>
</template>

<script>
import comment from '@/components/subComponents/subcomponents.vue'
export default {
components:{
  comment
},
data(){
  return{
    id:parseInt(this.$route.params.id)
  }
}
}
</script>

<style>

</style>