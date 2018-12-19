<template>
    <div>
        <h2>
            Saved List!
        </h2>
        <div v-for="(favorite, index) in favorites"
            :key="index">
        {{favorite.name}}
        <button @click="handleDelete">X</button>
        </div>
    </div>
</template>

<script>
import api from '../../services/api';
export default {

  data() {
    return {
      favorite: [],
      favorites: null, 
    };
  },
  created() {
    api.getFavorites()
      .then(favorites => this.favorites = favorites);
  },
  methods: {
    handleDelete() {
    //   let oneFavorite = { name: this.favorite.id };
      console.log(this.favorites[0]);
      api.deleteFavorite(this.favorites[0]);
    }
  }
};
</script>

<style>

</style>
