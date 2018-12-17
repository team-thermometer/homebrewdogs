<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="../assets/logo.png">
    <RouterView></RouterView>
    {{result}}
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'app',
  data() {
    return {
      result: null
    };
  },
  components: {
  },
  created() {
    api.test()
      .then(result => this.result = result);
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img.logo {
  width: 20%;
}
</style>