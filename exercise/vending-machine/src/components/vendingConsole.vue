<template>
  <div>
    <div class="container-fluid">
      <div class="row vdivide">
        <div class="col-md-8">
          <myProductList></myProductList>
        </div>
        <div class="col-md-4">
          <myInsertCoinPart></myInsertCoinPart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productlist from "./productList";
import insertCoinPart from "./insertCoinPart";
export default {
  name: "Products",
  components: {
    myProductList: productlist,
    myInsertCoinPart: insertCoinPart
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

<style scoped>
.row.vdivide [class*="col-"]:not(:last-child):after {
  background: #e0e0e0;
  width: 1px;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  min-height: 70px;
}
</style>