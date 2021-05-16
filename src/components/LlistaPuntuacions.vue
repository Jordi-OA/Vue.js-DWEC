<template>
  <div>
    <ol>
      <Aplicacioinfo
        v-for="(item, index) in this.$store.state.puntuacions"
        v-bind:key="index"
        v-bind:aplicacio="item"
      ></Aplicacioinfo>
    </ol>
    <div>
      <ButtonCounter />
      <ButtonCounter />
    </div>
  </div>
</template>


<script>
import ButtonCounter from "@/components/ButtonCounter";
import Aplicacioinfo from "@/components/Aplicacioinfo";
export default {
  name: "LlistaPuntuacions",
  props: ["aplicacio"],
  components: { ButtonCounter, Aplicacioinfo },
};
</script>

<style scoped>
</style>