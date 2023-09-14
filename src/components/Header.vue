<template>
  <header class="header">
    <router-link to="/" class="logo">
      <img src="@/assets/img/icon/logo.svg" alt="Logo" />
    </router-link>
    <label class="address">
      <input
        type="text"
        class="input input-address"
        placeholder="Адрес доставки"
      />
    </label>
    <div class="buttons">
      <span class="user-name"></span>
      <button
        @click="setModal('auth')"
        c
        class="button button-primary button-auth"
      >
        <span class="button-auth-svg"></span>
        <span lass="button-text">Войти</span>
      </button>
      <button
        @click="setModal('basket')"
        class="button button-cart"
        id="cart-button"
      >
        <span class="button-cart-svg"></span>
        <span class="button-text">Корзина</span>
      </button>
      <button class="button button-primary button-out">
        <span class="button-text">Выйти</span>
        <span class="button-out-svg"></span>
      </button>
    </div>
  </header>
  <auth-modal v-if="modalCurrent === 'auth'" @closeModal="closeModal" />
  <basket-modal v-if="modalCurrent === 'basket'" @closeModal="closeModal" />
</template>
<script>
import AuthModal from "@/components/modals/MyAuthModal.vue";
import BasketModal from "@/components/modals/MyBasketModal.vue";

export default {
  components: {
    "auth-modal": AuthModal,
    "basket-modal": BasketModal,
  },
  data() {
    return {
      modalCurrent: null,
    };
  },
  methods: {
    closeModal() {
      this.modalCurrent = null;
    },
    setModal(modal) {
      this.modalCurrent = modal;
    },
  },
};
</script>
<style></style>
