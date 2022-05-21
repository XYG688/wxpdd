<template>
  <div class="home">
    <search :mess="mess" />
    <van-tabs>
      <van-tab v-for="index in 8" :title="'推荐 ' + index" :key="index">
        <HomeRemend />
      </van-tab>
    </van-tabs>
    <TabBar />
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from "@/components/TabBar.vue";
import instance from "@/api/api";
import Search from "@/components/Search.vue";
import HomeRemend from "@/components/HomeRemend.vue";
export default {
  name: "HomeView",
  data() {
    return {
      mess: "首页搜索",
    };
  },
  components: {
    TabBar,
    Search,
    HomeRemend
  },
  methods: {
    getfn() {
      instance.get("/get").then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>
<style lang="less" scoped>
</style>
