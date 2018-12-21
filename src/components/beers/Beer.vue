<template>
  <li v-if="beer">
    <RouterLink class="router" :to="`/beers/${beer.id}`">
      <h4>{{beer.name}}</h4>
    </RouterLink>
      <p>{{beer.tagline}}</p>
  </li>
</template>

<script>
export default {
  props: {
    beer: null
  }
};
</script>

<style scoped>
li {
  text-align: left;
  list-style: none;
  margin: 10px;
}
h4 {
  margin: 0px;
  text-align: center;
}
p {
  margin: 0px;
  text-align: center;
}
.router {
  text-decoration: none;
  color: #2c3e50;
}
.router:hover {
  color:#00afdb;
}
</style>