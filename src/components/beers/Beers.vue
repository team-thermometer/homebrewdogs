<template>
  <section>
    <BeerSearch :onSearch="handleSearch" :search="search"/>
    <pre v-show="error" class="error">
      {{error}}
    </pre>
    <p v-if="search">Searching for &quot;{{ search }}&quot;</p>
  <div>
    <ul v-if="beer">
      <Beer v-for="beer in beer"
        :key="beer.id"
        :beer="beer"/>
    </ul>
  </div>
  </section>
</template>

<script>
import api from '../../services/api';
import Beer from './Beer';
import BeerSearch from './BeerSearch';

export default {
  data() {
    let search = this.$route.query.search;
    return {
      beer: null,
      loading: false,
      error: null,
      search: search ? decodeURIComponent(search) : '' };
  },
  components: {
    BeerSearch,
    Beer
  },
  created() {
    this.searchBeer();
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
      this.handleSearch(decodeURIComponent(newSearch));
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchBeer();
    },
    searchBeer() {
      this.loading = true;
      this.error = null;
      api.getBeer(this.search)
        .then(response => {
          this.beer = response.beer;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    }
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
