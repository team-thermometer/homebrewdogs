<template>
  <div id="app">
    <RouterView></RouterView>
    {{beers}}
  </div>
</template>

<script>
import api from '../../services/api';
export default {
  name: 'app',
  data() {
    return {
      beers: null
    };
  },
  components: {
  },
  created() {
    api.test()
      .then(beers => this.beers = beers);
  }
};
</script>