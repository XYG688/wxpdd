<template>
  <div>
    <search :mess="mess" />
    <!-- <h3>分类页面</h3> -->
    <div class="main">
      <van-sidebar class="slider-left" v-model="activeKey" @change="onchange">
        <div v-for="item in types" :key="item.id">
          <van-sidebar-item :title="item.title" />
        </div>
      </van-sidebar>
      <div class="slider-right" ref="sliderRight">
        <div v-if="children">
          <div>{{ children.title }}</div>
          <van-grid :column-num="3" :border="false">
            <van-grid-item
              v-for="value in children.goods"
              :key="value.id"
            >
              <van-image :src="value.image" />
              <div>{{value.text}}</div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>

    <TabBar :mess="mess" />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import Search from "@/components/Search.vue";
import instance from "@/api/api";
export default {
  name: "type",
  data() {
    return {
      mess: "分类搜索",
      types: null,
      activeKey: 0,
      children: null,
    };
  },
  components: {
    TabBar,
    Search,
  },
  methods: {
    async getTypes() {
      let { data } = await instance.get("/types");
      this.types = data;
      this.children = this.types[0].children;
    },
    onchange(index) {
      this.children = this.types[index].children;
      this.$refs.sliderRight.scrollTop = 0;
    },
  },
  created() {
    this.getTypes();
  },
};
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}
.main {
  display: flex;
  overflow: hidden;
  width: 100%;
  .slider-left {
    height:  calc(100vh - 100px);
    overflow: scroll;
  }
  .slider-right {
    height: calc(100vh - 100px);
    overflow: scroll;
    width: 80%;
  }
}
</style>