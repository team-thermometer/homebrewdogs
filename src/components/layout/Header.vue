<template>
  <header>
      <RouterLink to="/"><img src="../../assets/logo.png" alt="homebrewdog logo" class="logo"></RouterLink>
  </header>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      user: null,
    };
  },
};
</script>

<style>
nav {
  display:flex;
  justify-content: space-evenly;
}
</style>