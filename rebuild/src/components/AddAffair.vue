<template>
  <div>
    <van-popup
      :value="show"
      @input="handleInput"
      position="top"
      style="border-radius: 0 0 15px 15px"
      :style="{ height: '65%' }"
    >
      <div style="background-color: rgba(0,0,0,0)">
        <form>
          <van-field v-model="tempAffair.title" label="每日任务" rows="2" autosize type="textarea" />
          <van-field v-model="tempAffair.extra" label="详细说明" rows="2" autosize type="textarea" />
          <van-field
            v-model="tempAffair.deadline"
            label="截止时间"
            rows="2"
            autosize
            disabled
            type="textarea"
            v-on:click="() => showTimePacker=true"
          />
          <van-row>
            <van-button plain hairline type="primary" v-on:click="() => show = false" style="margin-right: 3em">返回</van-button>
            <van-button
              plain
              hairline
              type="info"
              v-on:click="addDailyAffair()"
              v-bind:disabled="dis"
              style="margin-left: 3em"
            >提交</van-button>
          </van-row>
        </form>
      </div>
    </van-popup>
    <!-- 时间选择 -->
    <van-popup v-model="showTimePacker" position="bottom" :style="{ height: '30%' }">
      <van-datetime-picker
        :show-toolbar="false"
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        v-on:change="changeToDeadline"
      />
    </van-popup>
  </div>
</template>

<script>
// import axios from "axios";
import { baseURL } from "../main";
import { ApiInstance } from "../instances/index";
export default {
  name: "AddAffair",
  props: ["value"],
  data() {
    return {
      tempAffair: {},
      show: this.value,
      showTimePacker: false,
      currentDate: new Date(),
      minDate: new Date(),
      maxDate: new Date(2023, 0, 1),
      dis: false
    };
  },
  watch: {
    value(v) {
      this.show = v;
    }
  },
  methods: {
    async addDailyAffair() {
      try {
        const token = localStorage.getItem("token");
        this.dis = true;
        const { data: res } = await ApiInstance.post(
          baseURL + "/operaDaily/add",
          {
            title: this.tempAffair.title,
            extra: this.tempAffair.extra,
            deadline: this.currentDate
          },
          {
            headers: {
              Authorization: token
            }
          }
        );
        alert("提交成功");
        this.dis = false;
        window.location.reload();
      } catch (e) {this.dis = false;}
    },
    handleInput(value) {
      this.$emit("input", value);
    },
    changeToDeadline: function() {
      let y = this.currentDate.getFullYear();
      let m = this.currentDate.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = this.currentDate.getDate();
      d = d < 10 ? "0" + d : d;
      let h = this.currentDate.getHours();
      let minute = this.currentDate.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      //   let second = this.currentDate.getSeconds();
      //   second = minute < 10 ? "0" + second : second;

      this.tempAffair.deadline = y + "-" + m + "-" + d + " " + h + ":" + minute;
    }
  }
};
</script>