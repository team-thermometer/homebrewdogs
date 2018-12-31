<template>
  
  <section class="random">
    <button @click="randomBeer()" class="random-btn">Get random Beer!</button>
    <div v-if="random" class="random">
      <img :src="random.image_url" class="random_image">
      <RouterLink class="router" :to="`/beers/${random.id}`">
        {{random.name}}
      </RouterLink>
      <p>
        Pairs well with: 
        <ul>
          <li v-for="(pairing, index) in random.food_pairing"
            :key="index">
            {{pairing}}
          </li>
      </p>
    </div>
  </section>
      
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      random: null
    };
  },
  methods: {
    randomBeer() {
      return api.getRandomBeer()
        .then(random => this.random = random[0]);
    }
  }
};
</script>

<style scoped lang="postcss">

img {
  width: 30px;
  height: 80px;
  margin-right: 20px;
}

.random {
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #00afdb;
}

.random_image {
  margin: 20px 0px;
}

button.random-btn {
  margin-bottom: 5px;
}
</style>