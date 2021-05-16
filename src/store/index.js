import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    aplicacions: [
      {
        nom: "Whatsapp",
        descripcio: "Una aplicació de missatgeria",
        instalada: true,
        totalClicks: 0
      },
      { nom: "Minecraft", descripcio: "Joc", instalada: false, totalClicks: 0 },
      {
        nom: "Meet",
        descripcio: "Aplicació de videoconferències per la feina",
        instalada: true,
        totalClicks: 0
      }
    ],
    puntuacions: [
      {
        nom: "Whatsapp",
        puntuacio: "0",
        totalClicks: 0
      },
      { nom: "Minecraft", puntuacio: "0", totalClicks: 0 },
      {
        nom: "Meet",
        puntuacio: "0",
        totalClicks: 0
      }
    ],
    totalClicks: 0
  },
  mutations: {
    afegir: function (state, aplicacio) {
      state.aplicacions.push(aplicacio);
      state.puntuacions.push(aplicacio);
    },
    esborrar: function (state, aplicacio) {
      const index = state.aplicacions.indexOf(aplicacio);
      state.aplicacions.splice(index, 1);
    },
    incrementa(state, aplicacio) {
      const index = state.aplicacions.indexOf(aplicacio);
      state.puntuacions[index].totalClicks++;
    }
  }
});

export default store;
