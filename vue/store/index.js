import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


import forms from './create-form';
import available from './formsStore';
// import localStore from './localStore'



Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        available,
        forms
    },
})

export default store;