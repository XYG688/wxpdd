<template>
  <div class="search">
    <van-search
      class="s"
      shape
      v-model="value"
      :placeholder="mess"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["mess"],
  // props:{
  //     mess:{
  //         type:String,
  //         value:""
  //     }
  // }
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="less" scoped>
.search {
    .s {
        padding: 10px 20px;
        .van-search__content {
            padding-left: 130px;
        }
    }
}
</style>