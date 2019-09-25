<template>
  <div id="app">
    <myheader></myheader>
    <router-view />
    <myfooter name="Kunjanaphorn" email="kunjanaphorn.b@gmail.com"></myfooter>
  </div>
</template>

<script>
import header from "./components/header";
import footer from "./components/footer";
export default {
  name: "App",
  components: {
    myheader: header,
    myfooter: footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}
</style>
