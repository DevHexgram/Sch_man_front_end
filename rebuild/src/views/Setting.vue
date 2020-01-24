<template>
  <div class="inner content">
      <!-- <van-tab title="设置">
        <slot> -->
          <van-button type="info" v-on:click="aboutShowUp" style="margin: 10px">关于作者</van-button>
          <van-button type="info" v-on:click="verShowUp" style="margin: 10px">版本更迭</van-button>
          <van-button type="info" v-on:click="logout" style="margin: 10px">登出</van-button>
        <!-- </slot>
      </van-tab> -->
    <div v-show="showAbout" class="tt">
      <about />
    </div>
    <div v-show="showVer" class="tt">
      <version />
    </div>
  </div>
</template>

<script>
import about from "./About";
import version from "./Version";
export default {
  name: "setting",
  components: {
    about,
    version
  },
  data() {
    return {
      showAbout: false,
      showVer: false
    };
  },
  methods: {
    aboutShowUp() {
      this.showAbout = !this.showAbout;
      this.showVer = false;
    },
    verShowUp() {
      this.showVer = !this.showVer;
      this.showAbout = false;
    },
    logout: function() {
      localStorage.removeItem("token");
      this.$router.push("/");
      window.location.reload();
    }
  }
};
</script>

<style>
.tt {
  padding: 0px;
  margin: 10px;
  max-height: 400px;
  overflow: auto;
}
</style>