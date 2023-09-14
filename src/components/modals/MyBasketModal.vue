<template>
  <div class="modal modal-cart" @click="closeModal">
    <div class="modal-dialog" @click.stop>
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="closeModal">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <!-- Iterate through basket.items and display each item -->
        <div class="food-row" v-for="(item, index) in basketItems" :key="index">
          <span class="food-name">{{ item.name }}</span>
          <strong class="food-price">{{ item.price }} ₽</strong>
          <div class="food-counter">
            <button class="counter-button" @click="basketDeleteItem(item)">
              -
            </button>
            <span class="counter">{{ item.count }}</span>
            <button class="counter-button" @click="handleBasket(item)">
              +
            </button>
          </div>
        </div>
        <!-- /.foods-row -->
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ totalPrice }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button class="button clear-cart">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("basket", ["items", "totalPrice"]),
    basketItems() {
      return this.items.map((item) => ({
        ...item,
      }));
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    ...mapActions("basket", ["handleBasket", "basketDeleteItem"]),
  },
};
</script>

<style></style>
