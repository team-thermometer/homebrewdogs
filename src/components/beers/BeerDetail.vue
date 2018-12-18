<template>
  <section v-if="beer">
    <h2>{{beer.name}}</h2>
    <p>{{beer.description}}
    <p>ABV: {{beer.abv}}</p>
    <p>IBU: {{beer.ibu}}</p>
    <p>First brewed: {{beer.first_brewed}}</p>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      beer: null
    };
  },
  created() {
    api.getBeer(this.$route.params.id)
      .then(beer => {
        this.beer = beer[0];
      });
  },

};
</script>

<style>

</style>
