<template>
  <ul>
    <section v-if="search == 'undefined'">
      <h1 class="search-btn">
        <button class="search" @click="showModal = true">Search</button>
      </h1>
      <Modal v-if="showModal" :onClose="() => showModal = false">
        <BeerSearch :onSearch="handleSearch" :search="search"/>
      </Modal>
      <img v-if="search === 'undefined' || page === 'undefined'"
        src="https://marketingweek.imgix.net/content/uploads/2016/05/26124706/Brewdog_masthead_1.png?auto=compress,format,&crop=faces,entropy,edges&fit=crop&q=60&w=1600&h=600">
    </section>
    <section v-else>
    <p v-if="beers.length === 0">No results</p>
      <Beer v-for="beer in beers"
        :key="beer.id"
        :beer="beer"/>
      <p>
        <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
        Searching for &quot;{{ search }}&quot; Page {{ page }}
        <button @click="handlePage(1)" :disabled="beers.length < 1">Next</button>
      </p>
    </section>
  </ul>
</template>

<script>
import api from '../../services/api';
import Beer from './Beer';
import Modal from '../shared/Modal';
import BeerSearch from './BeerSearch';

export default {
  name: 'beers',
  data() {
    return {
      beers: Array,
      search: decodeURIComponent(this.$route.query.search),
      showModal: false,
      page: 1 || decodeURIComponent(this.$route.query.page)
    };
  },
  components: {
    Beer,
    BeerSearch,
    Modal,
  },
  created() {
    api.getBeers()
      .then(beers => this.beers = beers);
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      let newPage = newRoute.query.page;
      const oldPage = oldRoute.query.page;
      if(newSearch === oldSearch && newPage === oldPage) return;
      if(newSearch !== oldSearch) {
        newPage = 1;
      }
      this.search = newSearch;
      this.page = newPage;
      this.handleSearch();
    }
  },
  methods: {
    handleSearch() {
      this.recordPage();
      this.searchBeers();
      this.showModal = false;
    },
    searchBeers() {
      api.getBeerByKeyword(this.search, this.page)
        .then(beers => this.beers = beers);
    },
    handlePage(increment) {
      this.page += increment;
      this.recordPage();
    },
    recordPage() {
      this.$router.push({
        query: {
          search: encodeURIComponent(this.search),
          page: this.page
        }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
ul {
  list-style: none;
  align-content: center;
  padding-left: 0;
  margin-bottom: 0;
}
li {
  padding: 20px;
}
button.search {
  cursor: pointer;
  font-size: 18px;
  border-radius: 12px;
}
button.search:hover {
  background: gold;
}
.search-btn {
  background: #00afdb;
  padding-top: 5px;
  padding-bottom: 10px;
}
img {
  margin-top: 0px;
}
h1 {
  margin-bottom: 0;
}
section {
  margin-bottom: -8px;
}
</style>
