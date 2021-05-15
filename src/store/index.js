import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        aplicacions: [
            {nom: "Whatsapp", descripcio: "Una aplicació de missatgeria", instalada: true},
            {nom: "Minecraft", descripcio: "Joc", instalada: false},
            {nom: "Meet", descripcio: "Aplicació de videoconferències per la feina", instalada: true},
        ]
    },
    mutations: {
        afegir: function (state, aplicacio) {
            state.aplicacions.push(aplicacio);
        },
        esborrar: function (state, aplicacio) {
            const index = state.aplicacions.indexOf(aplicacio);
            state.aplicacions.splice(index, 1);
        },
    },
});

export default store;
