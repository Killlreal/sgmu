import Vue from 'vue';
import router from '../router/index.js'
import Layout from './layout.vue';
import store from '../store/index.js';



export default class AdminPanel {
    constructor(selector) {
        new Vue({
            router,
            el: selector,
            render: h => h(Layout, {}),
            store
        });
    }
}