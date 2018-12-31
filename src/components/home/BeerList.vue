<template>
  <!-- This is a list, right? not divs -->
  <ul>
    <li v-for="beer in beers"
        :key="beer.name" 
        class="list">
        <img :src= "beer.image_url">
        <div class="info">
          <p>
            <RouterLink class="router" :to="`/beers/${beer.id}`">
              {{beer.name}}
            </RouterLink>
          </p>
          <p>
            {{beer.tagline}}
          </p>
          <p>
          Abv: {{beer.abv}}
          </p>
        </div>
    </li>
  </ul>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      beers: null
    };
  },
  created() {
    api.getBeers()
      // what? why would you slice from 2?
      .then(beers => this.beers = beers.slice(2, 12));
  }
};
</script>

<style scoped lang="postcss">
.list:hover {
  img {
    transform: scale(1.3);
  }
}
.list {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 30px;
  height: 80px;
  margin-right: 20px;
}
</style>