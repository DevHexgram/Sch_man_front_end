<template>
  <div class="outter box" :style="{ background: backGround , 'background-size': 'cover'}">
    <router-view style="content" />
    <div v-show="isLogin"><changeBG /></div>
    <div v-show="isLogin" class="footer">
      <div class="nav" v-on:click="goToAffair"><img src="./assets/affair.png" ></div>
      <div class="nav" v-on:click="goToMore"><img src="./assets/more.png" ></div>
      <div class="nav" v-on:click="goToSet"><img src="./assets/setting.jpg" ></div>
    </div>
  </div>
</template>

<style>
img {
  width: 50%;
  height: 100%;
}
.outter {
  margin: 0px;
  width: 100%;
  height: 100%;
  padding: 0px;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.content {
  flex: 1;
}
.footer {
  width: 100%;
  height: 50px;
  max-height: 50px;
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  background: #fff;
}
.nav {
  flex: 1; /*等分*/
  text-align: center;
  background: inherit;
  padding: 0px;
  margin: 0px;
}
</style>

<script>
import changeBG from "@/components/ChangeBG";
import {baseURL} from "./main";
export default {
  components: {
    changeBG,
  },
  data() {
    return {
      isLogin: false,
      backGround: "url("+baseURL+"/backgroundImage)"
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    if (token == null) this.isLogin = false;
    else this.isLogin = true;
  },
  methods: {
    goToAffair() {
      this.$router.push('/home')
      window.location.reload()
    },
    goToMore() {
      this.$router.push('/more')
      window.location.reload()
    },
    goToSet() {
      this.$router.push('/setting')
      window.location.reload()
    },
  }
};
</script>
