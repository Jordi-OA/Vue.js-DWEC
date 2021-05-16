<template>
  <button v-on:click="incrementar">M'has pitjat {{ comptador }} vegades</button>
</template>
<script>
export default {
  name: "ButtonCounter",
  data: function () {
    return {
      comptador: 0,
    };
  },
  methods: {
    incrementar: function () {
      this.comptador++;
    },
  },
};
</script>
<style scoped>
</style>
