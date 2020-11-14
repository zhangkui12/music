<template>
  <div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { getBanner } from "@/api";
import { onMounted } from "vue";

export default {
  name: "home",
  components: { HelloWorld },
  setup () {
    onMounted(() => {
      const data = getBanner();
      console.log("22", data);
    });
  }
};
</script>

<style lang="less"></style>
