<template>
  <div class="markdown-body">
      <MD />
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import MD from "./About.md";
import "github-markdown-css";
export default {
  name: "about",
  components: {
      MD
  },
  data() {},
  methods: {}
};
</script>