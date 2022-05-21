<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :required="true"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, validator: fn, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant';
import debounce from "@/utils/debounce";
import instance from "@/api/api";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      debounceloginfn: null,
      nextTo: null,
    };
  },
  created() {
    this.nextTo = this.$router.currentRoute.params.id;
    this.debounceloginfn = debounce(this.loginfn, 2000);
  },
  methods: {
    async loginfn() {
      // 登录验证业务
      let { data } = await instance.post("/login");
      console.log(data);
      let token = data.token;
      //
      this.$store.commit("settoken", token);
      Toast({
        type: "success",
        message: "登录成功",
        onClose: () => {
          this.$router.push({name:this.nextTo})
        },
      });
    },
    onSubmit(a) {
      // 登录验证
      this.debounceloginfn();
      console.log(a);
    },
    fn(v) {
      console.log(v);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
