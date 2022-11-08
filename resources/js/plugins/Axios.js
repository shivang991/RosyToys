import axios from "axios";
import { useStore } from "vuex";

axios.defaults.headers = { accept: "application/json" };

const postMultipart = (state, url, data) => {
    const multipartData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++)
                multipartData.append(`${key}[]`, value[i]);
        } else if (typeof value !== "undefined" || value !== null)
            multipartData.append(key, value);
    });
    return axios.post(url, multipartData, {
        headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${state.auth.accessToken}`,
        },
    });
};

// auth helpers ----->
function authReq(state, method, url, data = null) {
    const config = {
        headers: { Authorization: `Bearer ${state.auth.accessToken}` },
    };
    if (method === axios.get || method === axios.delete)
        return method(url, config);
    return method(url, data, config);
}
const logout = async (commit, state) => {
    await authReq(state, axios.post, "/api/logout");
    commit("auth/CLEAR_STATE");
};

export function useAxios() {
    const { commit, state } = useStore();
    return {
        logout: () => logout(commit, state),
        post: axios.post,
        get: axios.get,
        delete: axios.delete,
        postMultipart: (url, data) => postMultipart(state, url, data),
        authGet: (url) => authReq(state, axios.get, url),
        authDelete: (url) => authReq(state, axios.delete, url),
        authPost: (url, data) => authReq(state, axios.post, url, data),
    };
}

export const Axios = axios;

export default useAxios;
