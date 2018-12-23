<template>
  <section v-if="beer">
    <h2>{{beer.name}}</h2>
    <p class="checkmark"
      @click="handleAdd">✓</p>
    <span id="saved" v-if="this.saved"></span>
    <p id="rated" v-if="this.saved"></p>
    <StarRating v-if="favorites[0]"
      class="stars"
      :increment="1"
      v-model="rating"
      @click.native="handleRate"
    >
    </StarRating>
    <p>{{beer.description}}</p>
    <img :src="beer.image_url">
    <p>ABV: {{beer.abv}}</p>
    <p>IBU: {{beer.ibu}}</p>
    <p>First brewed: {{beer.first_brewed}}</p>
  </section>
</template>

<script>
import api from '../../services/api';
import { StarRating } from 'vue-rate-it';

export default {
  data() {
    return {
      saved: [],
      beer: null,
      favorites: [],
      beerIcon: '',
      rating: 0,
      ratings: []
    };
  },
  components: {
    StarRating
  },
  created() {
    api.getBeer(this.$route.params.id)
      .then(beer => this.beer = beer[0]);
  },
  methods: {
    handleAdd() {
      let oneBeer = { 
        id: this.beer.id,
        name: this.beer.name,
        abv: this.beer.abv,
        ibu: this.beer.ibu
      };
      return api.addFavorite(oneBeer)
        .then(saved => {
          this.favorites.push(saved);
          let savedB = document.getElementById('saved');
          savedB.innerHTML = 'saved!';
        });
    },
    handleRate() {
      let rating = { rating: this.rating, favoriteId: this.favorites[0].id };
      return api.addRating(rating)
        .then(savedRating => {
          let rated = document.getElementById('rated');
          rated.innerHTML = 'rated!';
          this.ratings.push(savedRating);
        });
    }
  }

};
</script>

<style lang="postcss" scoped>
section {
  margin: 20px 100px;
}
h2 {
  display: inline;
}
p {
  align-content: center;
}
.checkmark {
  display: inline;
  padding-left: 20px;
  color: green;
  font-size: 28px;
  cursor: pointer;
}
.stars {
  flex-direction: column;
  padding-top: 10px;
}
img {
  width: 50px;
}
</style>
