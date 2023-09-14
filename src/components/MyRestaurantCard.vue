<template>
  <router-link
    :to="`/restourant/${item.products}`"
    class="card card-restaurant"
  >
    <img :src="item.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ item.name }}</h3>
        <span class="card-tag tag">{{ item.time_of_delivery }} мин</span>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="rating">{{ item.stars }}</div>
        <div class="price">От {{ item.price }} ₽</div>
        <div class="category">{{ item.kitchen }}</div>
      </div>
      <!-- /.card-info -->
    </div>
    <!-- /.card-text -->
  </router-link>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},

  mounted() {},
};
</script>
<style></style>
