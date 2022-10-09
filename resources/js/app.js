/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import { createApp } from 'vue';
import App from './App.vue';
import GlobalComponents from './plugins/GlobalComponents';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(GlobalComponents)
  .use(BootstrapIconsPlugin)
  .mount('#app');
