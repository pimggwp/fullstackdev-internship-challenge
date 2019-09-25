<template>
  <div class="row">
    <div v-for="product in products" :key="product.id" class="col-md-3 col-sm-6">
      <img class="product-pic" height="180" :src="product.image" />
      <h5 class="mt-2 text-left title">{{product.name}}</h5>
      <p class="title text-right">{{product.price}} THB</p>
      <button
        v-if="product.in_stock == true"
        class="btn btn-block btn-success btn-secondary title"
      >เลือก</button>
      <button v-else class="btn btn-secondary btn-block title text-white" disabled>สินค้าหมด</button>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("loadProducts");
  },
  computed: {
    products(){
      return this.$store.getters.getProducts.data
    }
  }
};
</script>