<template>
    <div>
      <h1>Top 10 Beers!</h1>
      <button @click="randomBeer()">Get random Beer!</button>
      <div v-if="random[0]" class="random">
        <img :src="random[0].image_url" class="random_image">
        {{random[0].name}}!
        <p>
        Pairs well with: {{random[0].food_pairing[0]}}
        </p>
      </div>
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
      random: Object
    };
  },
  components: {
  },
  created() {
    api.getBeers()
      .then(beers => this.beers = beers.slice(2, 12));
  },
  methods: {
    randomBeer() {
      return api.getRandomBeer()
        .then(random => {
          console.log(random[0].name);
          return this.random = random;
        });
    }
  }
};
</script>

<style scoped>
.list {
  padding: 10px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.random_image {
  margin: 20px 0px;
}

</style>