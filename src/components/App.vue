<template>
  <div id="app">
    <Header/>
    <main>
      <RouterView></RouterView>
    </main>
    {{result}}
  </div>
</template>

<script>
import api from '../services/api';
import Header from './layout/Header';

export default {
  name: 'app',
  data() {
    return {
      result: null
    };
  },
  components: {
    Header
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
</style>