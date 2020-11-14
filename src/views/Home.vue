<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App 更新吧哒哒哒哒哒哒多多多多多多多多多多多多多多多多多多多多多" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { getBanner } from "@/api/index.ts";
import { onMounted } from "vue";

export default {
  name: "home",
  components: { HelloWorld },
  setup() {
    onMounted(() => {
      let data = getBanner();
      console.log("22", data);
    });
  },
};
</script>
