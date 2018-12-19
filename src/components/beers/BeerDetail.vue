<template>
  <section v-if="beer">
    <h2>{{beer.name}}</h2>
    <p class="checkmark"
        @click="handleAdd">✓</p>
    <star-rating class="stars"
                :increment="0.5"
                v-model="rating"></star-rating>
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
  // props: {
  //   onAdd: Function
  // },
  data() {
    return {
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
    
  },
  methods: {
    handleAdd() {
      let oneBeer = { name: this.beer.name };
      return api.addFavorite(oneBeer)
        .then(saved => {
          console.log(saved);
          this.favorites.push(saved);
          // this.$router.push('/profile');
          // alert('beer added to your profile!');
        });
    },
    handleRate() {
      console.log();
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
