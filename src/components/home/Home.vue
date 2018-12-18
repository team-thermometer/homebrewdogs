<template>
    <div>
      <h1>Top 10 Beers!</h1>
        <div v-for="beer in beers.slice(2, 12)"
            :key="beer.name" class="list">
            <img :src= "beer.image_url">
            <div class="info">
              <p>
              {{beer.name}}, 
              </p>
              {{beer.tagline}}
              <p>
              Abv: {{beer.abv}}
              </p>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../services/api';
export default {
  data() {
    return {
      beers: Object
    };
  },
  components: {
  },
  created() {
    api.test()
      .then(beers => this.beers = beers);
  }
};
</script>

<style scoped>
.list {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 30px;
  height: 80px;
  margin-right: 20px;
}

</style>