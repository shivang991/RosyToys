import { Axios } from "@/plugins/Axios";

export const categoryOptions = [
    "Mayoreo",
    "Menudeo",
    "Temporada",
    "Tendencia",
    "Favoritas de los Clientes",
    "Niños",
];

export default {
    namespaced: true,
    state: {
        searchQuery: "", // string
        filters: {}, // Record<string,string[]>
        data: null, // {id:number, image_url:string, price:number, title:string}[]
        pagination: null, // Omit<ReturnType<typeof App\Models\Product::paginate>, "data">
        isLoading: false,
    },
    mutations: {
        SET_QUERY: (state, newQuery) => (state.searchQuery = newQuery),
        SET_FILTERS: (state, newFilters) => (state.filters = newFilters),
        SET_PRODUCTS: (state, newProducts) => (state.data = newProducts),
        SET_LOADING: (state, newIsLoading) => (state.isLoading = newIsLoading),
        SET_PAGINATION: (state, newPagination) =>
            (state.pagination = newPagination),
    },
    actions: {
        async refetch({ commit, state }, url) {
            if (!state.isLoading) {
                commit("SET_LOADING", true);
                const params = {
                    ...state.filters,
                    search: state.searchQuery,
                };
                const axiosGetArg =
                    typeof url === "string"
                        ? [url, { baseURL: null, params }]
                        : ["/api/product/all", { params }];
                const {
                    data: { data, ...pagination },
                } = await Axios.get(...axiosGetArg);
                commit("SET_LOADING", false);
                commit("SET_PRODUCTS", data);
                commit("SET_PAGINATION", pagination);
            }
        },
    },
};
