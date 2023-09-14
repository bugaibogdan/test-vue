<template>
  <promo-banner />
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input
          type="text"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
        />
      </label>
    </div>

    <div v-if="isLoading" class="loading-message">
      <p>Loading...</p>
    </div>
    <div v-else class="cards cards-restaurants">
      <restoraunt-card v-for="item in getItems" :key="item.name" :item="item" />
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import PromoBannder from "@/components/MyPromoBannder.vue";
import RestaurantCard from "@/components/MyRestaurantCard.vue";

export default {
  components: {
    "restoraunt-card": RestaurantCard,
    "promo-banner": PromoBannder,
  },
  data() {
    return {};
  },
  mounted() {
    this.fetchPartenerstData();
  },
  computed: {
    ...mapGetters("parteners", ["getItems", "isLoading"]),
  },
  methods: {
    ...mapActions("parteners", ["fetchPartenerstData"]),
  },
};
</script>
<style></style>
