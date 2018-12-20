<template>
  <section v-if="beer">
    <h2>{{beer.name}}</h2>
    <p class="checkmark"
       @click="handleAdd">✓</p>
    <star-rating v-if="favorites[0]"
                class="stars"
                :increment="0.5"
                v-model="rating"
                @click.native="handleRate"></star-rating>
    {{rating}}
    <p>{{beer.description}}</p>
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
      .then(beer => {
        this.beer = beer[0];
      });
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
          console.log(saved);
          // if not the same push to favorites
          this.favorites.push(saved);
          // this.$router.push('/profile');
          // alert('beer added to your profile!');
        });
    },
    handleRate() {
      console.log('rating', this.rating);
      console.log('favorites', this.favorites[0].id);

      let rating = { rating: this.rating, favoriteId: this.favorites[0].id };
      return api.addRating(rating)
        .then(savedRating => {
          this.ratings.push(savedRating);
        });
    }
  }

};
</script>

<style scoped>
section {
  margin: 0px 100px;
}
img {
  width: 172px;
  height: 558px;
}
h2 {
  display: inline;
}
.checkmark {
  display: inline;
  padding-left: 20px;
  color: green;
  font-size: 28px;
  cursor: pointer;
}
.stars {
  margin-left: 200px;
}
</style>
