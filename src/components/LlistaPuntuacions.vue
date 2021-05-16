<template>
  <div>
    <ol>
      <li>
        {{ aplicacio.nom }} - puntuació
        {{ this.$store.state.totalClicks }}
      </li>
      <li>APP - puntuació {{ this.$store.state.totalClicks }}</li>
      <li>APP - puntuació {{ this.$store.state.totalClicks }}</li>
      <li>APP - puntuació {{ this.$store.state.totalClicks }}</li>
    </ol>
    <div>
      <Aplicacio
        v-for="(item, index) in this.$store.state.aplicacions"
        v-bind:key="index"
        v-bind:aplicacio="item"
      />
      <ButtonCounter />
      <ButtonCounter />
    </div>
  </div>
</template>


<script>
import ButtonCounter from "@/components/ButtonCounter";
import Aplicacio from "@/components/Aplicacio";
export default {
  name: "Aplicacio",
  props: ["aplicacio"],
  components: { ButtonCounter, Aplicacio },
};
</script>

<style scoped>
</style>