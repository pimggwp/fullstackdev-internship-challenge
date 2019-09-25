<template>
  <div class="row">
    <div id="console" class="title">{{money}} THB</div>
    <div v-for="coin in coins" :key="coin.value" class="col-md-3 col-sm-12">
      <div class="container">
        <div class="row">
          <img
            class="coin-pic"
            height="78"
            :src="require('../../public/images/'+coin.image)"
            @click="addMoney(coin.value)"
          />
        </div>
        <div class="row">
          <p class="title" style="margin-left: auto; margin-right: auto;">{{coin.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  mounted() {},
  data() {
    return { money: 0 };
  },
  methods: {
    addMoney(value) {
      this.money += value;
    }
  },
  computed: {
    coins() {
      return this.$store.getters.getCoins;
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