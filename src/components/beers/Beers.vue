<template>
  <ul v-if="beers">
    <Beer v-for="beer in beers"
      :key="beer.id"
      :beer="beer"/>
    <p>
    <button @click="showModal = true"> Search
    </button>
    </p>
    <Modal v-if="showModal" :onClose="() => showModal = false">
      <BeerSearch :onSearch="handleSearch"/>
    </Modal>
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
      showModal: false
    };
  },
  components: {
    Beer,
    BeerSearch,
    Modal
  },
  methods: {
    handleSearch(beer) {
      return this.onSearch(beer)
        .then(() => this.show = false);
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
</style>
