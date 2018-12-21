<template>
  <li>
    <h3>
      {{updatedFavorite.name}}
    </h3>
    <p v-if="favorite.comments"> 
      {{favorite.comments}}
    </p>
    <button @click="() => show = !show">Comment</button>
    <div v-if="show">
      <form @submit.prevent="onEdit(favorite, updatedFavorite)">
        <p>
          <textarea v-model="updatedFavorite.comments" placeholder="leave a comment about this beer"></textarea>
        </p>
        <button @click="() => show = !show">Submit</button>
      </form>
    </div>
    <button @click="handleDelete" class="delete">Delete Beer</button>
  </li>
</template>

<script>
import api from '../../services/api';

export default {
  props: {
    favorite: null,
    onEdit: Function
  },
  data() {
    const update = this.favorite || {};
    return {
      show: false,
      updatedFavorite: { 
        abv: update.abv || '',
        comments: update.comments || '',
        ibu: update.ibu || '',
        id: update.id || '',
        name: update.name || ''
      }
    };
  },
  created() {
    api.getFavorites()
      .then(favorites => this.favorites = favorites);
  },
  methods: {
    handleDelete() {
      api.deleteFavorite(this.favorite.id)
        .then(() => {
          alert('Deleted beer');
          this.$router.go();
        });
    }
  }
};
</script>

<style lang="postcss" scoped>
li:hover {
  background: #00afdb;
}
</style>