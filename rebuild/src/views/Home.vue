<template>
  <div class="inner"  :key="ckey" id="home">
    <van-tabs
      v-model="active"
      swipeable
      style="
                width: 100%;
                height: 100%;
                padding: 0px;"
    >
      <van-tab title="每日任务">
        <slot>
          <DailyAffairs />
        </slot>
      </van-tab>
      <van-tab
        title="长期事务"
        style="
                width: 100%;
                height: 100%;
                padding: 0px;"
      >
        <slot>
          <Affairs />
        </slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import DailyAffairs from "@/components/DailyAffairs.vue";
import Affairs from "@/components/Affairs";

export default {
  name: "home",
  props: ["parentFunction"],
  components: {
    DailyAffairs,
    Affairs,
  },
  async created() {
      const token = localStorage.getItem("token");
      console.log(token)
      if (token == null) {
          this.$router.push("/")
      }
  },
  data() {
    return {
      active: 2,
      backGround: "url(http://www.sweetbeecr.com:12210/backgroundImage)",
      //https://s0.xinger.ink/fj/fjurl.php
      //https://s0.xinger.ink/acgimg/acgurl.php
      ckey: 1
    };
  },

  methods: {
  }
};
</script>
<style scoped>
.inner {
  width: 100%;
  height: 100%;
  padding: 0px;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
}
</style>
