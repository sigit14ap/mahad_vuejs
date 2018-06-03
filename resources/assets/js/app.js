
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueResource from 'vue-resource';
import LaravelValidator from 'vue-laravel-validator';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import vueHeadful from 'vue-headful';

import pesantren_index from './components/pusat_lembaga/pesantren/index.vue';
import pesantren_create from './components/pusat_lembaga/pesantren/create.vue';
import pesantren_edit from './components/pusat_lembaga/pesantren/edit.vue';
import pesantren_show from './components/pusat_lembaga/pesantren/show.vue';


window.VueAxios=require('vue-axios').default;
window.Axios=require('axios').default;

Vue.use(Vuetify);
Vue.use(VueRouter,VueAxios, axios);
Vue.use(VueResource);
Vue.use(LaravelValidator);

Vue.component('home', require('./Layouts.vue'));
Vue.component('vue-headful', vueHeadful);

const routes = [
    {name: 'pesantren_index', text : 'Pesantren', icon: 'home', path : '/home/pesantren', component : pesantren_index, sidebar : true},
    {name: 'pesantren_create', text : 'Tambah Pesantren', icon: 'grade', path : '/home/pesantren/create', component : pesantren_create, sidebar : false},
    {name: 'pesantren_edit', text : 'Ubah Data Pesantren', icon: 'face', path : '/home/pesantren/edit', component : pesantren_edit, sidebar : false},
];

const router  = new VueRouter({
    mode: 'history',
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
