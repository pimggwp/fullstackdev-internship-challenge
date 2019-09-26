<template>
  <div class="row">
    <button class="btn btn-success btn-block text text-white m-3">Receive change</button>
    <div class="col-md-6">
      <div id="console">
        <img
          v-if="orders"
          class="product-pic animate bottom-position"
          height="160"
          :src="orders.image"
        />
        <p class="animate title" v-if="orders">{{orders.name}}</p>
      </div>
    </div>
    <div class="col-md-6">
      <div id="console">change 3 THB</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {},
  computed: {
    orders() {
      return this.$store.getters.getProductOrder;
    }
  }
};
</script>

<style scoped>
#console {
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  height: 350px;
}

.animate {
  animation: 0.4s ease alternate bobbing;
}

@keyframes bobbing {
  from {
    transform: translate(0px, -150px);
  }
}

.bottom-position {
  margin-top: 150px;
}
</style>