<template>
  <div class="card">
    <img :src="item.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ item.name }}</h3>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="ingredients">
          {{ item.description }}
        </div>
      </div>
      <!-- /.card-info -->
      <div class="card-buttons">
        <button
          class="button button-primary button-add-cart"
          @click="handleBasket(item)"
        >
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ item.price }} ₽</strong>
      </div>
    </div>
    <!-- /.card-text -->
  </div>
  <!-- /.card -->
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("basket", ["handleBasket", "basketDeleteItem"]),
  },
};
</script>
<style></style>
