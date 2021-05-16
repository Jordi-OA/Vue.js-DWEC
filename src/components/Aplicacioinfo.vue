<template>
  <div>
    <li>
      {{ aplicacio.nom }} - Puntuació
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