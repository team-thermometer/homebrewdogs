<template>
  <div>
    <h2>
        Saved List!
    </h2>
      <div v-for="(favorite, index) in favorites"
          :key="index">
      <!-- <button @click="handleDelete">X</button> -->
      <p>
        <textarea placeholder="leave a comment about this beer"></textarea>
      </p>
        <button @click="handleComment">Submit</button>
      </div>
      <ul>
        <Favorite v-for="favorite in favorites" 
          :key="favorite.id"
          :favorite="favorite"
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

<style lang="postcss" scoped>
ul {
  list-style: none;
  padding-left: 0px;
}
</style>
