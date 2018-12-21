<template>
  <div class="savedlist">
    <h2>
        Saved List!
    </h2>
    <h2 v-if="favorites < 1"> Go out and try some BrewDog beers!</h2>
      <ul>
        <Favorite v-for="favorite in favorites" 
          :key="favorite.id"
          :favorite="favorite"
          :onEdit="handleComment"
        />
      </ul>
  </div>
</template>

<script>
import api from '../../services/api';
import Favorite from './Favorite';

export default {

  data() {
    return {
      favorites: null, 
      beer: null
    };
  },
  components: {
    Favorite
  },
  created() {
    api.getFavorites()
      .then(favorites => this.favorites = favorites);
    api.getBeers()
      .then(beer => {
        this.beer = beer;
      });
  },
  methods: {
    handleComment(old, favorite) {
      const index = this.favorites.indexOf(old);
      console.log('index', index);
      return api.addComment(favorite.id, favorite)
        .then(commentedFavorite => {
          console.log('commentedFavorite', commentedFavorite);
          this.favorites.splice(index, 1, commentedFavorite);
        });
    }
  }
};
</script>

<style lang="postcss" scoped>
ul {
  list-style: none;
  padding-left: 0px;
}
.savedlist {
  background-color:#00afdb;
  padding: 2rem;
  text-align: center;
  max-width: 100%;
  margin: auto;
  padding: 20px;
}
</style>
