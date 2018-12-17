<template>
  <li v-if="beer">
    <RouterLink :to="`/beers/${beer.id}`">
      <h4>{{beer.name}}</h4>
    </RouterLink>
      <p>{{beer.description}}</p>
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
}
h4 {
  margin: 0px;
}
p {
  margin: 0px;
}
</style>