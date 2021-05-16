<template>
  <div>
    <li>
      {{ aplicacio.nom }} - Puntuació
      {{ this.$store.state.puntuacions.totalClicks }}
      {{ aplicacio.totalClicks }}
    </li>
  </div>
</template>

<script>
export default {
  name: "Aplicacioinfo",
  props: ["aplicacio"],
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>