import "./bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faRightFromBracket,
    faPlus,
    faPen,
    faChevronDown,
    faUpload,
    faBars,
    faTimes,
    faChevronRight,
    faCheck,
    faCheckSquare,
    faSearch,
    faArrowLeft,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faYoutube,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    // faArrowRight,
    faWhatsapp,
    faArrowLeft,
    faSearch,
    // faPlay,
    // faTrash,
    // faCartShopping,
    faPlus,
    // faMinus,
    faCheck,
    faCheckSquare,
    faRightFromBracket,
    faChevronDown,
    faChevronRight,
    // faArrowRight,
    // faHeadset,
    // faMoneyCheckDollar,
    // faFaceSmile,
    faTwitter,
    faInstagram,
    faFacebook,
    faYoutube,
    // faStar,
    faExclamationTriangle,
    // faShoppingCart,
    faBars,
    faTimes,
    // faPhone,
    // faMapLocation,
    faPen,
    faUpload
    // faExpand,
    // faQuoteLeft,
    // faStarOutlined
);
