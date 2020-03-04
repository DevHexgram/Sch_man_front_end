<template>
  <div class="outter box" :style="{ background: backGround , 'background-size': 'cover'}">
    <router-view style="content" />
    <div v-show="isLogin" class="footer" style="padding: 0px">
      <div class="icon is-large nav" v-on:click="goToAffair">
        <i class="fa fa-address-book-o"></i>
        <p>事务</p>
      </div>
      <div class="icon is-large nav" v-on:click="goToMore">
        <i class="fa fa-home"></i>
        <p>更多</p>
      </div>
      <div class="icon is-large nav" v-on:click="goToSet">
        <i class="fa fa-bar-chart"></i>
        <p>设置</p>
      </div>
    </div>
  </div>
</template>

<style>
p {
  padding: 0px;
  margin: 0px;
  line-height: 10px;
  font-size: 10px;
}
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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  display: flex;
  /* flex-direction: row; */
  padding: 0px;
  margin: 0px;
  background: #fff;
}
.nav {
  flex: 1; /*等分*/
  text-align: center;
  background: #fff;
  padding: 0px;
  margin: 0px;
}
</style>

<script>
// import changeBG from "@/components/ChangeBG";
export default {
  components: {
    // changeBG
  },
  data() {
    return {
      isLogin: false,
      backGround: "url(http://www.sweetbeecr.com:1221/backgroundImage)"
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    if (token == null) this.isLogin = false;
    else this.isLogin = true;
  },
  methods: {
    goToAffair() {
      this.$router.push("/home");
      window.location.reload();
    },
    goToMore() {
      this.$router.push("/more");
      window.location.reload();
    },
    goToSet() {
      this.$router.push("/setting");
      window.location.reload();
    }
  }
};
</script>
