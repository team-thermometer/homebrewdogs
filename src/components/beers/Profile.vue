<template>
  <div class="savedlist">
    <h1>Saved List</h1>
    <h3 v-if="favorites && favorites.length === 0">Go out and try some BrewDog beers!</h3>
    <ul v-if="favorites">
      <Favorite v-for="favorite in favorites" 
        :key="favorite.id"
        :favorite="favorite"
        :onEdit="handleComment"
      />
    </ul>

    <section v-if="ratings && ratings.length > 0">
      <hr>
      <h2 id="table">By ratings</h2>
      <table>
        <thead>
          <tr>
            <th>Rating</th>
            <th>Name</th>
            <th>IBU</th>
            <th>ABV</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rating in ratings"
            :key="rating.id">
            <td>{{rating.rating}} stars</td>
            <RouterLink class="router" :to="`/beers/${rating.api_id}`">
              <td>{{rating.name}}</td>
            </RouterLink>
            <td>{{rating.ibu}}</td>
            <td>{{rating.abv}}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import api from '../../services/api';
import Favorite from './Favorite';

export default {
  name: 'profile',
  data() {
    return {
      ratings: null,
      favorites: null, 
      user: null
    };
  },
  components: {
    Favorite
  },
  created() {
    api.getFavorites()
      .then(favorites => this.favorites = favorites);
    api.getRatings()
      .then(ratings => this.ratings = ratings);
  },
  methods: {
    handleComment(old, favorite) {
      const index = this.favorites.indexOf(old);
      return api.addComment(favorite.id, favorite)
        .then(commentedFavorite => {
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
  li {
    margin: 8px;
    padding-bottom: 3px;
    padding-top: 3px;
  }
}
.savedlist {
  padding: 2rem;
  text-align: center;
  max-width: 100%;
  padding: 0;
}
h2#table {
  margin-top: 0;
  text-decoration: underline;
  font-style: italic;
}
h1 {
  background-color: #00afdb;
}
table {
  width: 100%;
  border-collapse: collapse;
}
td {
  padding: 10px 3px;
}
</style>
