<template>
  <div class="row">
    <button
      class="btn btn-success btn-block text text-white m-3"
      @click="return_change()"
    >Receive change</button>
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
      <div id="console">
        <div v-for="(change_coin,index) in change" :key="index">
          <div class="row element-center" style="width:80%">
            <div class="col-md-6">
              <img
                v-if="change_coin!=0 && ReturnCoin==true"
                class="animate mt-2"
                height="70"
                :src="require('../../public/images/'+coins[index].image)"
              />
            </div>
            <div class="col-md-6">
              <p class="animate mt-4" v-if="change_coin!=0 && ReturnCoin==true">X {{change_coin}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
    };
  },
  methods: {
    return_change() {
      this.$store.dispatch('is_return');
      setTimeout(
        function() {
          this.reset_all();
        }.bind(this),
        3000
      );
    },
    reset_all() {
      this.$store.dispatch('not_return');
      this.$store.dispatch("resetTotal");
    }
  },
  computed: {
    orders() {
      return this.$store.getters.getProductOrder;
    },
    total() {
      return this.$store.getters.getTotal;
    },
    coins() {
      return this.$store.getters.getCoins;
    },
    change() {
      var change = [0, 0, 0, 0];
      var total_change = this.total;
      for (var i in this.coins) {
        if (total_change / this.coins[i].value != 0) {
          change[i] = parseInt(total_change / this.coins[i].value);
          total_change = total_change % this.coins[i].value;
        }
      }
      return change;
    },
    ReturnCoin(){
      return this.$store.getters.getReturnCoin;
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

.element-center {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
}
</style>