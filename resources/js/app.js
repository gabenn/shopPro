/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
// Require Vue
window.Vue = require('vue').default;

// Register Vue Components
Vue.component('app', require('./components/App.vue').default);

// Initialize Vue
const app = new Vue({
    el: '#app',
});