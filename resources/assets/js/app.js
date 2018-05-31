
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import List from './components/home/List.vue';
import Awesome2 from './components/home/Awesome2.vue';
import Awesome3 from './components/home/Awesome3.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.component('home', require('./components/home/Index.vue'));

const routes = [
    {text : 'List', icon: 'home', path : '/list', component : List},
    {text : 'Component 2', icon: 'grade', path : '/component_2', component : Awesome2},
    {text : 'Component 3', icon: 'face', path : '/component_3', component : Awesome3},
];

const router  = new VueRouter({
    routes : routes,
    linkActiveClass: 'link__tile--active',
})
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    data () {
        return {
            routes : routes,
        }
    },
    router,
});
