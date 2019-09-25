<template>
  <div class="row">
    <div v-for="product in products" :key="product.id" class="col-md-3 col-sm-6">
      <img class="product-pic" height="160" :src="product.image" />
      <h5 class="mt-2 text-left title">{{product.name}}</h5>
      <p class="title text-right">{{product.price}} THB</p>
      <button v-if="product.in_stock == true" class="btn btn-block btn-success text">เลือก</button>
      <button v-else class="btn btn-secondary btn-block text text-white" disabled>หมด</button>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("loadProducts");
  },
  computed: {
    products() {
      return this.$store.getters.getProducts.data;
    }
  }
};
</script>

<style scoped>
.product-pic {
  border: 1px solid #ddd; 
  border-radius: 4px; 
  padding: 5px; 
  width: 225px; 
}
</style>
