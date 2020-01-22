<template>
  <div class="my_body">
    <img src="https://i.loli.net/2020/01/20/pvfW7yUiwCb4qh6.png" style="width:200px; height:200px; border-radius:50%;">
    <form @submit="auth()">
      <div class="input-group">
        <input
          v-model="username"
          type="text"
          class="my_input"
          placeholder="用户名"
          aria-describedby="basic-addon1"
          required
        />
      </div>
      <div class="input-group">
        <input
          v-model="password"
          type="password"
          class="my_input"
          placeholder="密码"
          aria-describedby="basic-addon1"
          required
        />
      </div>
      <button type="submit" class="circle_button" aria-haspopup="true" aria-expanded="false">GO</button>
    </form>
    <div class="my_bottom">
      <p>没有账号？</p>
      <p @click="goToRegist" class aria-haspopup="true" aria-expanded="false">戳我注册</p>
    </div>
  </div>
</template>

<script>
import { ApiInstance } from "../instances/index";
import { baseURL } from "../main";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    if (token != null) {
      this.$router.push("/home");
    }
  },
  methods: {
    async auth() {
      // localStorage 使用文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
      const token = localStorage.getItem("token");
      if (token != null) {
        this.$router.push("/home");
      } else {
        try {
          const { data: res } = await ApiInstance.post(
            baseURL + "/auth/login",
            { username: this.username, password: this.password }
          );
          const token1 = res.data.token;
          localStorage.setItem("token", token1);
          this.$router.push("/home");
          window.location.reload()
        } catch (e) {}
      }
    },
    goToRegist() {
      this.$router.push("/regist");
    }
  }
};
</script>

<style>
p {
  font-size: 2px
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20%;
}
.login {
  display: flex;
  margin: 0px;
  align-content: center;
}
.my_body {
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.my_input {
  border-radius: 20px;
  border: solid 1px #ced4da;
  width: 100%;
  padding: 0.375rem 0.75rem;
  margin: 0.2rem 0rem;
}
.circle_button {
  width: 50px;
  height: 50px;
  border: 1px solid #979797;
  border-radius: 50px;
  background: #66ccff;
  font-size: 10px;
  color: gray;
  margin-top: 10px;
}
.my_bottom {
  flex: 1 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
</style>