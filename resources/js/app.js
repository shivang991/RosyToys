/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
    .use(store)
    .use(router)
    .use(VueGoogleMaps, {
        load: { key: "AIzaSyB9dc7sKul6Qse_zUQerk7a2yb66j2UNfU" },
    })
    .mount("#app");

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faRightFromBracket,
    faPlus,
    faPen,
    faChevronDown,
    faArrowRight,
    faEnvelope,
    faHeadset,
    faMoneyCheckDollar,
    faUpload,
    faFaceSmile,
    faStar,
    faExclamationTriangle,
    faShoppingCart,
    faBars,
    faTimes,
    faChevronRight,
    faPhone,
    faMapLocation,
    faCheck,
    faCheckSquare,
    faMinus,
    faCartShopping,
    faTrash,
    faExpand
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faTrash,
    faCartShopping,
    faPlus,
    faMinus,
    faCheck,
    faCheckSquare,
    faRightFromBracket,
    faChevronDown,
    faChevronRight,
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
    faShoppingCart,
    faBars,
    faTimes,
    faPhone,
    faMapLocation,
    faPlus,
    faPen,
    faUpload,
    faExpand
);
