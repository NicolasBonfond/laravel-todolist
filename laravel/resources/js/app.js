// app.js

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

const routes = [{
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component: IndexComponent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
const app = new Vue(Vue.util.extend({
    router
}, App)).$mount('#app');

document.getElementById('addbtn').addEventListener('click', () => {
    /*     let taskinput = `<input type="text" name="fname"></input>`

        let element = document.getElementById('formtopost');
        element.appendChild() */


    let input = document.createElement("input");
    let checkbox = document.createElement("input");
    input.setAttribute('type', 'text')
    checkbox.setAttribute('type', 'checkbox')

    let information = document.createTextNode("post.body");
    input.appendChild(information);
    let element = document.getElementById("formtopost");
    element.appendChild(input);

})
