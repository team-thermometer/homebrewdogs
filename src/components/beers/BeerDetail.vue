<template>
  <section v-if="beer">
    <h2>{{beer.name}}</h2>
    <p>{{beer.description}}
    <p>{{beer.abv}}</p>
    <p>{{beer.ibu}}</p>
    <p>{{beer.first_brewed}}</p>
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
    api.getBeers(this.$route.params.id)
      .then(beer => {
        this.beer = beer;
      });
  },

};
</script>

<style>

</style>
