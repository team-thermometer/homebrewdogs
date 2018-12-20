<template>
    <div>
        <h2>
            Saved List!
        </h2>
        <h3 v-if="favorites < 1"> Go out and try some BrewDog beers!</h3>
        <div
            v-for="(favorite, index) in favorites"
            :key="index">
        {{favorite.name}}
        <button @click="handleDelete">X</button>
        <p>
            <textarea placeholder="leave a comment about this beer"></textarea>
        </p>
            <button @click="handleComment">Submit</button>
        </div>
    </div>
</template>

<script>
import api from '../../services/api';
export default {

  data() {
    return {
      favorites: null, 
      beer: null
    };
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
    handleDelete() {
      console.log(this.favorites);
      // change this from deleting first item to items id 
      api.deleteFavorite(this.favorites[0].id)
        .then(() => {
          alert('Deleted beer');
          this.$router.go();
        });
    },
    handleComment() {
      console.log('comment', this.comment);
      let comment = { comment: this.comment };
      return api.addComment(comment)
        .then(comment => {
          this.comment.push(comment);
        });
    }
  }
};
</script>

<style>

</style>
