export const LS_TOKEN_KEY = 'access_token';

export default {
  namespaced: true,
  state: {
    profile: null,
    accessToken: null,
  },
  mutations: {
    SET_PROFILE(state, payload) {
      localStorage.setItem(LS_TOKEN_KEY, payload.accessToken);
      state.profile = payload.profile;
      state.accessToken = payload.accessToken;
    },
    CLEAR_STATE(state) {
      localStorage.removeItem(LS_TOKEN_KEY);
      state.profile = null;
      state.accessToken = null;
    },
  },
  getters: {
    isAdmin(state) {
      return state.profile && state.profile.role === 'admin';
    },
    isLoggedIn(state) {
      return !!state.accessToken;
    },
    profileImage(state) {
      if (state.profile) return state.profile.profile_image_url || 'https://s3.us-east-2.amazonaws.com/arda.storage/profile_images/user.png';
      return null;
    },
  },
};
