<template>
  <div class="markdown-body">
      <V />
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import V from "./Version.md";
import "github-markdown-css";
export default {
  name: "about",
  components: {
      V
  },
  data() {},
  methods: {}
};
</script>