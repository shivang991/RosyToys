import { Axios } from "@/plugins/Axios";
const LS_TOKEN_KEY = "access_token";

export const staffAccessOptions = [
    "carouselManager",
    "productManager",
    "customerServiceManager",
    "postCreator",
];

export default {
    namespaced: true,
    state: {
        isReady: false,
        profile: null,
        accessToken: null,
        accessibleModules: null, // type: Set (only for staff)
    },
    mutations: {
        SET_PROFILE(state, payload) {
            if (payload.accessToken) {
                localStorage.setItem(LS_TOKEN_KEY, payload.accessToken);
                state.accessToken = payload.accessToken;
            }
            state.profile = payload.profile;
        },
        CLEAR_STATE(state) {
            localStorage.removeItem(LS_TOKEN_KEY);
            state.profile = null;
            state.accessToken = null;
        },
        // payload: {[keyof staffAccessOptions]: 1|0}
        SET_ACCESSIBLE_MODULES(state, payload) {
            const accessibleModules = new Set();
            Object.entries(payload).forEach(([module, canAccess]) => {
                if (staffAccessOptions.includes(module) && !!canAccess)
                    accessibleModules.add(module);
            });
            state.accessibleModules = accessibleModules;
        },
        SET_READY(state) {
            state.isReady = true;
            window.dispatchEvent(new CustomEvent("authready"));
        },
    },
    getters: {
        isLoggedIn(state) {
            return (
                state.profile && ["admin", "staff"].includes(state.profile.role)
            );
        },
    },
    actions: {
        async init({ commit }) {
            const authToken = localStorage.getItem(LS_TOKEN_KEY);
            if (!authToken) commit("CLEAR_STATE");
            else {
                // Manual auth request because store doesnt have auth token yet
                const authReqConfig = {
                    headers: { Authorization: `Bearer ${authToken}` },
                };
                try {
                    const { data: user } = await Axios.get(
                        "/api/user",
                        authReqConfig
                    );

                    // if user is staff, fetch capibilities
                    if (user.role === "staff") {
                        const { data: access } = await Axios.get(
                            `/api/user/staff/${user.id}`,
                            authReqConfig
                        );
                        commit("SET_ACCESSIBLE_MODULES", access);
                    }
                    commit("SET_PROFILE", {
                        accessToken: authToken,
                        profile: user,
                    });
                } catch (error) {
                    commit("CLEAR_STATE");
                }
            }
            commit("SET_READY");
        },
    },
};
