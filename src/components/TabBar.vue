<template>
  <div class="tabbar">
    <van-tabbar  v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/videos" icon="video-o">直播</van-tabbar-item>
      <van-tabbar-item to="/type" icon="bars">分类</van-tabbar-item>
      <van-tabbar-item to="/talk" icon="chat-o">聊天</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="smile-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="" scoped>
</style>