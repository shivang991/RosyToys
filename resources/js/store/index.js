import { createStore } from "vuex";

import auth from "./auth";
import products from "./products";
import cart from "./cart";

export default createStore({
    modules: { auth, products, cart },
});
