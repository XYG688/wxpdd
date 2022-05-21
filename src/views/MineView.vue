<template>
  <div>
      <h3>个人中心页面</h3>
      <button @click="fn">验证token</button>
      <button @click="deltoken">清除token</button>
      <TabBar />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue"
export default {
    name:"mine",
    components:{
      TabBar
    },
    methods:{
      fn(){
        console.log(this.$store)
      },
      deltoken(){
        this.$store.commit("deltoken","")
      }
    }
}
</script>

<style lang="less" scoped>

</style>