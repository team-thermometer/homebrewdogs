<template>
    <div>
        <h1>I am the dashboard component</h1>
    <Beer v-for="beer in beers"
            :key="beer.id"
            :beer="beer"/>
    </div>
</template>

<script>
import Beer from '../beers/Beer';
export default {
  props: {
    beer: Object
  },
  components: {
    Beer
  }
};
</script>

<style>

</style>
