<template>
    <div>
        <h2>
            Saved List!
        </h2>
        <div v-for="favorite in favorites"
            :key="favorite">
        {{favorite.name}}
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: null, 
    };
  }
};
</script>

<style>

</style>
