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
    <Pagination/>
  </ul>
</template>

<script>
import api from '../../services/api';
import Beer from './Beer';
import Modal from '../shared/Modal';
import BeerSearch from './BeerSearch';
import Pagination from '../shared/Pagination';

export default {
  data() {
    return {
      beers: null,
      showModal: false,
      
    };
  },
  components: {
    Beer,
    BeerSearch,
    Modal,
    Pagination
  },
  methods: {
    handleSearch(keyword) {
      this.searchBeers(keyword);
      this.showModal = false;
    },
    searchBeers(keyword) {
      api.getBeerByKeyword(keyword)
        .then(beers => this.beers = beers);
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
