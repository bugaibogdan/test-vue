import axios from "axios";

export const partenersModule = {
  state: () => ({
    items: [],
    loading: null,
  }),
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    isLoading(state) {
      return state.loading;
    },
  },
  actions: {
    async fetchPartenerstData({ commit }) {
      commit("setLoading", true);

      try {
        const response = await axios.get(`http://localhost:3000/partners`);

        commit("setItems", response.data);

        commit("setLoading", false);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);

        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
