<template>
  <div class="my_body">
    <img src="https://i.loli.net/2020/01/20/pvfW7yUiwCb4qh6.png" style="width:200px; height:200px; border-radius:50%;">
    <p>快和我签订契约嘤~</p>
    <form @submit="regist()">
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
      <div class="input-group">
        <input
          v-model="code"
          type="text"
          class="my_input"
          placeholder="邀请码"
          aria-describedby="basic-addon1"
          required
        />
      </div>
      <div class="btn-group">
        <button type="submit" class="btn btn-success" aria-haspopup="true" aria-expanded="false" style="margin-top: 10px">
          签订契约(
        </button>
      </div>
    </form>
    <div class="my_bottom">
    <p v-on:click="goToLogin">回去登录</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseURL } from "../main";
import {ApiInstance} from "../instances/index"
export default {
  name: "regist",
  data() {
    return {
      username: "",
      password: "",
      code: "",
      token: ""
    };
  },
  methods: {
    async regist() {
      try {
            const {data: res} = await ApiInstance.post(baseURL + '/auth/register',
                {username: this.username, password: this.password, code: this.code}
                )
                const token = res.data
                //console.log(token)
                localStorage.setItem("token",token)
                alert("注册成功")
                this.$router.push('/')
        } catch (e) {
        }
    },
    goToLogin() {
      this.$router.push("/")
    }
  },
};
</script>