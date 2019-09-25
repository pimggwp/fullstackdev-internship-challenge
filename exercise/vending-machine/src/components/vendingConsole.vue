<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9">
          <myProductList></myProductList>
        </div>
        <div class="col-md-3">จ่ายเงิน</div>
      </div>
    </div>
  </div>
</template>

<script>
import productlist from "./productList";
export default {
  name: "Products",
  components: {
    myProductList: productlist
  },
  mounted() {
    this.getProducts();
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      axios
        .get("https://www.mocky.io/v2/5c77c5b330000051009d64c9")
        .then(response => {
          this.products = response.data.data;
        });
    }
  }
};
</script>


<style scope>
.product-pic {
  border: 1px solid #ddd; /* Gray border */
  border-radius: 4px; /* Rounded border */
  padding: 5px; /* Some padding */
  width: 250px; /* Set a small width */
}
</style>