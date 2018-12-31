<template>
    <table v-if="favorites">
      <thead>
        <tr>
          <th>Count</th>
          <th>Average ABV</th>
          <th>Minimum ABV</th>
          <th>Maximum ABV</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="favorite in favorites"
          :key="favorite.favoriteId">
          <td>{{favorite.count}} total</td>
          <td>{{favorite.averageAbv}}</td>
          <td>{{favorite.minAbv}}</td>
          <td>{{favorite.maxAbv}}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      favorites: null
    };
  },
  components: {
  },
  created() {
    api.getFavStats()
      .then(favorites => this.favorites = favorites);
  }
};
</script>

<style scoped lang="postcss">
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  border: 1px solid gray;
}

td {
  padding: 10px 3px;
  border: 1px solid gray;
}
</style>