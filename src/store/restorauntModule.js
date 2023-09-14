import axios from "axios";

export const restorauntModule = {
  state: () => ({
    items: [],
    loading: false,
    minPrice: null,
    name: null,
    kitchen: null,
    rating: null,
  }),
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setPrice(state, minPrice) {
      state.minPrice = minPrice;
    },
    setName(state, name) {
      state.name = name;
    },
    setKitchen(state, kitchen) {
      state.kitchen = kitchen;
    },
    setRating(state, rating) {
      state.rating = rating;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setShortItems(state, items) {
      state.items = items.sort((a, b) => a.price - b.price);
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getMinPrice(state) {
      return state.minPrice;
    },
    getName(state) {
      return state.name;
    },
    getKitchen(state) {
      return state.kitchen;
    },
    getRating(state) {
      return state.rating;
    },
    isLoading(state) {
      return state.loading;
    },
  },
  actions: {
    async fetchRestaurantData({ commit }, products) {
      commit("setLoading", true);

      try {
        const { data } = await axios.get(`http://localhost:3000/${products}`);

        commit("setItems", data.products);
        commit("setPrice", data.price);
        commit("setName", data.name);
        commit("setKitchen", data.kitchen);
        commit("setRating", data.stars);

        commit("setLoading", false);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);

        commit("setLoading", false);
      }
    },
    changeSort({ commit, state }, sortBy) {
      let sortedItems = [...state.items];

      if (sortBy === "minPrice") {
        sortedItems = sortedItems.sort((a, b) => a.price - b.price);
      } else if (sortBy === "maxPrice") {
        sortedItems = sortedItems.sort((a, b) => b.price - a.price);
      }

      commit("setItems", sortedItems);
    },
  },
  namespaced: true,
};
