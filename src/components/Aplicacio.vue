<template>
  <div>
    <h3>{{ aplicacio.nom }}</h3>
    <p>{{ aplicacio.descripcio }}</p>
    <p>
      Instal·lada:
      <input type="checkbox" :checked="aplicacio.instalada" disabled />
    </p>
    <p><button @click="eliminar" type="button">Eliminar</button></p>
    <p>
      <button @click="minvar" type="button">
        {{ nomminvar }} ({{ comptadorneg }})Puntuar negativament
      </button>
      <button @click="incrementar" type="button">
        {{ nombotopuntuar }} ({{ comptador }})Puntuar positivament
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Aplicacio",
  props: ["aplicacio", "nombotopuntuar", "nomminvar"],
  data: function () {
    return {
      comptador: 0,
      comptadorneg: 0,
    };
  },
  methods: {
    eliminar() {
      this.$store.commit("esborrar", this.$props.aplicacio);
    },
    incrementar: function () {
      this.comptador++;
      this.$store.commit("incrementa", this.$props.aplicacio);
    },
    minvar: function () {
      this.comptadorneg--;
      this.$store.commit("minva", this.$props.aplicacio);
    },
  },
};
</script>

<style scoped>
</style>