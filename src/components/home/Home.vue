<template>
  <section>
    <p>
      Search the Beer List to save your favorite beers!
    </p>

    <h3>Your saved list:</h3>
    <Favorites/>
    
    <RandomBeer/>
    
    <h3>Specialties:</h3>
      <div v-for="beer in beers"
          :key="beer.name" class="list">
          <img :src= "beer.image_url">
          <div class="info">
            <p>
              <RouterLink class="router" :to="`/beers/${beer.id}`">
                {{beer.name}}
              </RouterLink>
            </p>
            {{beer.tagline}}
            <p>
            Abv: {{beer.abv}}
            </p>
          </div>
      </div>
  </section>
</template>

<script>
import api from '../../services/api';
import Favorites from 'Favorites';
import RandomBeer from 'RandomBeer';
import BeerList from 'BeerList';

export default {
  data() {
    return {
      beers: Object
    };
  },
  components: {
    Favorites,
    RandomBeer,
    BeerList
  }
};
</script>

<style scoped lang="postcss">

</style>