<template>
    <div>
        <h2>
            Saved List!
        </h2>
        <div v-for="(favorite, index) in favorites"
            :key="index">
        {{favorite.name}}
        </div>
    </div>
</template>

<script>
import api from '../../services/api';
export default {
  data() {
    return {
      favorites: null, 
    };
  },
  created() {
    api.getFavorites()
      .then(favorites => this.favorites = favorites);
  }
};
</script>

<style>

</style>
