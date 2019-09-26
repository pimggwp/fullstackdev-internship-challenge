<template>
  <div class="row">
    <!-- {{orders}} -->
    <div v-for="product in products" :key="product.id" class="col-md-3 col-sm-6">
      <img class="product-pic" height="160" :src="product.image" />
      <h5 class="mt-2 text-left title">{{product.name}}</h5>
      <p class="title text-right">{{product.price}} THB</p>
      <button
        v-if="product.in_stock == true"
        class="btn btn-block btn-success text"
        @click="addProduct(product)"
      >เลือก</button>
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
  methods: {
    addProduct(product) {
      if (this.total >= product.price) {
        this.$store.dispatch("addProduct", product);
        this.$store.dispatch("decreaseTotal", product.price);
      }
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProducts.data;
    },
    orders() {
      return this.$store.getters.getProductOrders;
    },
    total() {
      return this.$store.getters.getTotal;
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
