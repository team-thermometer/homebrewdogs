<template>
    <div>
        <h2>
            Saved List!
        </h2>
        <div v-for="(favorite, index) in favorites"
            :key="index">
        {{favorite.name}}
        <button @click="handleDelete">X</button>
        <p>
            <textarea placeholder="leave a comment about this beer"></textarea>
        </p>
            <button @click="handleSubmit">Submit</button>
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
      api.deleteFavorite(this.favorites[0].id)
        .then(() => {
          alert('deleted: ' + this.favorites[0].name);
          this.$router.go();
        });
    },
    handleSubmit() {
      console.log(1);
    }
  }
};
</script>

<style>

</style>
