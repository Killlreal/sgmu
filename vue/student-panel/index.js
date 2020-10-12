import Vue from 'vue';
import router from '../router/index.js'
import store from '../store/index.js';
import Layout from './layout.vue'



export default class StudentPanel {
    constructor(selector) {
        new Vue({
            router,
            el: selector,
            render: h => h(Layout, {}),
            store
        });
    }
}