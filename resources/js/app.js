/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import GlobalComponents from "./plugins/GlobalComponents";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).use(GlobalComponents).mount("#app");

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronDown,
    faArrowRight,
    faEnvelope,
    faHeadset,
    faMoneyCheckDollar,
    faFaceSmile,
    faStar,
    faExclamationTriangle,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faChevronDown,
    faArrowRight,
    faEnvelope,
    faHeadset,
    faMoneyCheckDollar,
    faFaceSmile,
    faTwitter,
    faInstagram,
    faFacebook,
    faYoutube,
    faStar,
    faExclamationTriangle,
    faShoppingCart
);
