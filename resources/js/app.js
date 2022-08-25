/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import './bootstrap';
// Require Vue
window.Vue = require('vue').default;

// Register Vue Components
Vue.component('app', require('./components/App.vue').default);
Vue.component('shop-section', require('./components/ShopSection.vue').default);
Vue.component('product-page', require('./components/ProductPage.vue').default);
// Initialize Vue
const app = new Vue({
    el: '#app',
});