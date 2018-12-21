<template>
  <div>
    <p>
      Check out the Beer List to save your favorite beers!
    </p>
    <div>
      <h3>Your stats:</h3>
      <table v-if="favorites">
        <thead>
          <tr>
            <th>Count</th>
            <th>Average favorite ABV</th>
            <th>Minimum favorite ABV</th>
            <th>Maximum favorite ABV</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="favorite in favorites"
            :key="favorite.favoriteId">
            <td>{{favorite.count}} total</td>
            <td>{{favorite.averageAbv}}</td>
            <td>{{favorite.minAbv}}</td>
            <td>{{favorite.maxAbv}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="random">
      <button @click="randomBeer()">Get random Beer!</button>
      <div v-if="random[0]" class="beerdiv">
        <div>
        <img :src="random[0].image_url" class="random_image">
        {{random[0].name}}!
        </div>
        <p>
        Pairs well with: {{random[0].food_pairing[0]}}
        </p>
      </div>
    </div>
      <h3>Specialties:</h3>
      <div v-for="beer in beers"
          :key="beer.name" class="list">
          <img :src= "beer.image_url">
          <div class="info">
            <p>
            {{beer.name}}, 
            </p>
            {{beer.tagline}}
            <p>
            Abv: {{beer.abv}}
            </p>
          </div>
      </div>
  </div>
</template>

<script>
import api from '../../services/api';
export default {
  data() {
    return {
      beers: Object,
      random: Object,
      favorites: null
    };
  },
  components: {
  },
  created() {
    api.getBeers()
      .then(beers => this.beers = beers.slice(2, 12));
    api.getFavStats()
      .then(favorites => this.favorites = favorites);
  },
  methods: {
    randomBeer() {
      return api.getRandomBeer()
        .then(random => {
          return this.random = random;
        });
    }
  }
};
</script>

<style scoped lang="postcss">
.list {
  position: relative;
  height: 150px;
  &:hover {
  img {
    transform: scale(1.3);
  }
}
}
.list {
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 30px;
  height: 80px;
  margin-right: 20px;
}
.random {
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #00afdb;
}
.random_image {
  margin: 20px 0px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  border: 1px solid gray;
}
td {
  padding: 10px 3px;
  border: 1px solid gray;
}

</style>