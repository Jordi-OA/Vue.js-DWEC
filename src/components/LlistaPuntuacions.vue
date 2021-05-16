<template>
  <div>
    <ol>
      <Aplicacioinfo
        v-for="(item, index) in this.$store.state.puntuacions"
        v-bind:key="index"
        v-bind:aplicacio="item"
      ></Aplicacioinfo>
    </ol>
    <div></div>
  </div>
</template>


<script>
import Aplicacioinfo from "@/components/Aplicacioinfo";
export default {
  name: "LlistaPuntuacions",
  props: ["aplicacio"],
  components: { Aplicacioinfo },
};
</script>

<style scoped>
</style>