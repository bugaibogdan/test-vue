<template>
  <section class="menu">
    <div class="section-heading-wrapper">
      <div class="section-heading">
        <h2 class="section-title restaurant-title">{{ getName }}</h2>
        <div class="card-info">
          <div class="rating">{{ getRating }}</div>
          <div class="price">От {{ getMinPrice }} ₽</div>
          <div class="category">{{ getKitchen }}</div>
        </div>
        <!-- /.card-info -->
      </div>
      <div class="buttons">
        <button class="button button-primary" @click="changeSort('maxPrice')">
          Сначала дорогие
        </button>
        <button class="button button-cart" @click="changeSort('minPrice')">
          Сначала дешевые
        </button>
      </div>
    </div>
    <div v-if="isLoading" class="loading-message">
      <p>Loading...</p>
    </div>
    <div v-else class="cards cards-menus">
      <product-card v-for="item in getItems" :key="item.id" :item="item" />
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import ProductCard from "@/components/MyProductCard.vue";

export default {
  components: {
    "product-card": ProductCard,
  },
  data() {},
  mounted() {
    const restaurantName = this.$route.params.restourant;
    this.fetchRestaurantData(restaurantName);
  },
  computed: {
    ...mapGetters("restoraunt", [
      "getItems",
      "isLoading",
      "getRating",
      "getMinPrice",
      "getName",
      "getKitchen",
    ]),
  },
  methods: {
    ...mapActions("restoraunt", ["fetchRestaurantData", "changeSort"]),
  },
};
</script>
<style scoped>
.section-heading-wrapper {
  display: flex;
  margin-bottom: 44px;
  justify-content: space-between;
}
.section-heading {
  margin-bottom: 0;
}
.buttons {
  display: flex;
  gap: 15px;
}
</style>
