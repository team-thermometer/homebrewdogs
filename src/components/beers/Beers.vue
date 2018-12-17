<template>
  <ul v-if="beers">
    <Beer v-for="beer in beers"
      :key="beer.id"
      :beer="beer"/>
  </ul>
</template>

<script>
import api from '../../services/api';
import Beer from './Beer';

export default {
  data() {
    return {
      beers: null
    };
  },
  components: {
    Beer
  },
  created() {
    api.test()
      .then(beers => this.beers = beers);
  }
};
</script>

<style lang="postcss">
ul {
  list-style: none;
  padding-left: 0;
  margin: 0em 20em 0em 20em;
}
</style>
