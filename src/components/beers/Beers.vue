<template>
  <ul v-if="beers">
    <p>
    <button class="search" @click="showModal = true"> Search
    </button>
    </p>
    <Modal v-if="showModal" :onClose="() => showModal = false">
      <BeerSearch :onSearch="handleSearch"/>
    </Modal>
    <Beer v-for="beer in beers"
      :key="beer.id"
      :beer="beer"/>
    <p>
      <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
      Page {{page}}
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
  data() {
    return {
      beers: null,
      showModal: false,
      page: 1
      
    };
  },
  components: {
    Beer,
    BeerSearch,
    Modal,
  },
  methods: {
    handleSearch(keyword) {
      this.searchBeers(keyword);
      this.showModal = false;
    },
    searchBeers(keyword) {
      api.getBeerByKeyword(keyword)
        .then(beers => this.beers = beers);
    },
    handlePage(increment) {
      this.page += increment;
      this.recordPage();
    },
    recordPage() {
      this.$router.push({
        query: {
          page: this.page
        }
      });
    }
  },
  watch: {
    $route(newRoute, oldRoute) {
      let newPage = newRoute.query.page;
      const oldPage = oldRoute.query.page;
      if(newPage === oldPage) return;
      this.page = newPage;
    }
  },
  created() {
    api.getBeers()
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
li {
  padding: 20px;
}
.search {
  cursor: pointer;
  font-size: 12px;
}
button:hover {
    background-color: white; 
    color: black; 
    border: 2px solid gray;
}
</style>
