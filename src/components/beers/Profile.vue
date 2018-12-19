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
      favorites: null,
    };
  },
  created() {
    api.getFavorites()
      .then(favorites => this.favorites = favorites);
  },
  methods: {
    handleDelete() {
      api.deleteFavorite(this.favorites[0].id)
        .then(() => {
          alert('deleted: ' + this.favorites[0].name);
          this.$router.go();
        });
    }
  }
};
</script>

<style>

</style>
