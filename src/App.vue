<template>
  <div id="app">
    <TakeHome />
  </div>
</template>

<script>
import TakeHome from "./components/TakeHome";
export default {
  name: "App",
  components: { TakeHome },
};
</script>

<style lang="scss">
@import "@/styles/_reset.scss";
#app {
  font-family: 'Passion One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
