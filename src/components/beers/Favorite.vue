<template>
  <li>
    <h3>
      {{favorite.name}}
    </h3>
    <button @click="handleDelete" class="delete">Delete</button>
  </li>
</template>

<script>
import api from '../../services/api';

export default {
  props: {
    favorite: null
  },
  created() {
    api.getFavorites()
      .then(favorites => this.favorites = favorites);
  },
  methods: {
    handleDelete() {
      // console.log(this.favorite.id);
      api.deleteFavorite(this.favorite.id)
        .then(() => {
          alert('Deleted beer');
          this.$router.go();
        });
    }
  }
};
</script>

<style>

</style>
