<template>
  <li>
    <span>
      <h4>{{updatedFavorite.name}}</h4>
      <button @click="handleDelete" class="delete">Delete</button>
      <button @click="() => show = !show" class="comment">Comment</button>
    </span>
    <p class="view">
    </p>
    <div v-if="show">
      <form @submit.prevent="onEdit(favorite, updatedFavorite)">
        <span>
          <textarea v-model="updatedFavorite.comments" placeholder="leave a comment about this beer"></textarea>
          <button @click="() => show = !show">Submit</button>
        </span>
      </form>
    </div>
    <p v-if="favorite.comments">
      {{favorite.comments}}
    </p>
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
          this.$router.go();
          alert('Deleted beer');
        });
    }
  }
};
</script>

<style lang="postcss" scoped>
h4, p {
  margin: 2px;
}
span {
  display: inline-flex;
  align-items: center;
}
button.delete {
  margin: 5px;
}
button:hover {
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 3px 3px 8px rgba(160, 158, 158, 0.89);
}
h3 {
  display: inline;
}
.link {
  font-size: 12px;
}
textarea {
  margin-right: 5px;
  margin-bottom: 8px;
}

</style>