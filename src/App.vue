<template>
  <div class="container">
    <header-vue />
  </div>
  <main class="main">
    <div class="container">
      <router-view />
    </div>
  </main>
  <footer-vue />
</template>
<script>
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";

export default {
  components: {
    HeaderVue,
    FooterVue,
  },
  data() {
    return {};
  },
};
</script>
<style></style>
