import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    aplicacions: [
      {
        nom: "Whatsapp",
        descripcio: "Una aplicació de missatgeria",
        instalada: true
      },
      { nom: "Minecraft", descripcio: "Joc", instalada: false },
      {
        nom: "Meet",
        descripcio: "Aplicació de videoconferències per la feina",
        instalada: true
      }
    ],
    puntuacions: [
      {
        nom: "Whatsapp",
        puntuacio: "0"
      },
      { nom: "Minecraft", puntuacio: "0" },
      {
        nom: "Meet",
        puntuacio: "0"
      }
    ],
    totalClicks: 0
  },
  mutations: {
    afegir: function (state, aplicacio) {
      state.aplicacions.push(aplicacio);
    },
    esborrar: function (state, aplicacio) {
      const index = state.aplicacions.indexOf(aplicacio);
      state.aplicacions.splice(index, 1);
    },
    incrementa(state) {
      state.totalClicks++;
    }
  }
});

export default store;
