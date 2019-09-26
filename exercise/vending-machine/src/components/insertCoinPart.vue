<template>
  <div class="row">
    <div id="console" class="title">{{total}} THB</div>
    <div v-for="coin in coins" :key="coin.value" class="col-md-3 col-sm-12">
      <div class="container">
        <div class="row">
          <img
            class="coin-pic"
            height="78"
            :src="require('../../public/images/'+coin.image)"
            @click="addCoin(coin.value)"
          />
        </div>
        <div class="row">
          <p class="title" style="margin-left: auto; margin-right: auto;">{{coin.value}} THB</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return { money: 0 };
  },
  methods: {
    addCoin(value) {
      if (this.ReturnCoin == false) {
        this.$store.dispatch("addTotal", value);
      }
    }
  },
  computed: {
    coins() {
      return this.$store.getters.getCoins;
    },
    total() {
      return this.$store.getters.getTotal;
    },
    ReturnCoin() {
      return this.$store.getters.getReturnCoin;
    }
  }
};
</script>

<style scope>
.coin-pic {
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
}

.coin-pic:hover {
  transform: scale(1.5);
}

#console {
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  font-size: 40px;
}
</style>