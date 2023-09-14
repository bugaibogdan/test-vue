export const basketModule = {
  state: () => ({
    items: [],
    loading: false,
    totalPrice: 0,
  }),
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    deleteItem(state, item) {
      state.items = state.items.filter((element) => element.id !== item.id);
    },
    setPrice(state, item) {
      state.totalPrice += item;
    },
    minusPrice(state, item) {
      state.totalPrice -= item;
    },

    setLoading(state, loading) {
      state.loading = loading;
    },
    incrementItem(state, item) {
      const basketItem = state.items.find(
        (basketItem) => basketItem.id === item.id
      );
      if (basketItem) {
        basketItem.count += 1;
      }
    },
    decrementItem(state, item) {
      const basketItem = state.items.find(
        (basketItem) => basketItem.id === item.id
      );
      if (basketItem && basketItem.count > 1) {
        basketItem.count -= 1;
      } else if (basketItem && basketItem.count === 1) {
        state.items = state.items.filter(
          (basketItem) => basketItem.id !== item.id
        );
      }
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getTotalPrice(state) {
      return state.totalPrice;
    },
  },
  actions: {
    handleBasket({ state, commit }, arg) {
      commit("setLoading", true);
      const basketItem = state.items.find((item) => item.id === arg.id);
      if (basketItem) {
        commit("incrementItem", basketItem);
        commit("setPrice", arg.price);
      } else {
        commit("setPrice", arg.price);
        commit("setItems", [...state.items, { ...arg, count: 1 }]);
      }
      commit("setLoading", false);
    },
    basketDeleteItem({ state, commit }, item) {
      commit("setLoading", true);
      const basketItem = state.items.find((i) => i.id === item.id);
      if (basketItem) {
        if (basketItem.count > 1) {
          commit("decrementItem", basketItem);
          commit("minusPrice", basketItem.price);
        } else {
          commit("minusPrice", basketItem.price);
          commit("deleteItem", basketItem);
        }
      }
      commit("setLoading", false);
    },
  },
  namespaced: true,
};
