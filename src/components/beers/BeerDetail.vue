<template>
  <section v-if="beer">
    <h2>{{beer.name}}</h2>
    <p class="checkmark"
        @click="handleAdd">✓</p>
    <star-rating class="stars"
                :increment="0.5"
                v-model="rating"
                @click.native="handleRate"></star-rating>
    {{rating}}
    <p>{{beer.description}}
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
      profile: null,
      beer: null,
      favorites: [],
      beerIcon: '',
      rating: 0
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
    this.profile = JSON.parse(window.localStorage.getItem('profile'));
    console.log('profile', this.profile);
  },
  methods: {
    handleAdd() {
      let oneBeer = { 
        name: this.beer.name,
        abv: this.beer.abv,
        ibu: this.beer.ibu
      };
      return api.addFavorite(oneBeer)
        .then(saved => {
          console.log(saved);
          this.favorites.push(saved);
          // this.$router.push('/profile');
          // alert('beer added to your profile!');
        });
    },
    handleRate() {
      console.log('rating', this.rating);

      let rating = { rating: this.rating, profileId: this.profile.id, favoriteId: this.beer.id };
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
  margin: 0em 20em 0em 20em;
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
  margin-left: 250px;
}
</style>
