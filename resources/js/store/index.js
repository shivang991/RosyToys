import { createStore } from 'vuex';

import auth from '@/store/auth';

export default createStore({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    LOGOUT(state) {
      state.user.data = null;
      state.user.loggedIn = false;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null);
      if (user) {
        commit('SET_USER', user);
        commit('SET_LOGGED_IN', true);
      } else {
        commit('SET_USER', null);
        commit('SET_LOGGED_IN', false);
      }
    },
  },
  modules: { auth },
});
