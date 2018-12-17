<template>
  <li v-if="beer">
    <!-- <h4>{{beer.name}}</h4>
    <p>{{beer.description}}</p> -->
    I am the Beer.vue component
  </li>
</template>

<script>
export default {
  props: {
    beer: Object
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