<template>
  <ul v-if="search">
    <p>
    <button class="search" @click="showModal = true">
      Search
    </button>
    </p>
    <Modal v-if="showModal" :onClose="() => showModal = false">
      <BeerSearch :onSearch="handleSearch" :search="search"/>
    </Modal>
    <Beer v-for="beer in beers"
      :key="beer.id"
      :beer="beer"/>
    <p>
      <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
      Searching for &quot;{{ search }}&quot; Page {{page}}
      <button @click="handlePage(1)">Next</button>
    </p>
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
      beers: null,
      search: decodeURIComponent(this.$route.query.search = ' '),
      showModal: false,
      page: decodeURIComponent(this.$route.query.page) || 1
      
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
      this.search = decodeURIComponent(newSearch);
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
        .then(beers => {
          return this.beers = beers;
        });
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
}
li {
  padding: 20px;
}
.search {
  cursor: pointer;
  font-size: 18px;
  border-radius: 12px;
}
button:hover {
  background: #00afdb;
}
</style>
