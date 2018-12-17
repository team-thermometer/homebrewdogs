<template>
  <header>
      <RouterLink to="/"><img src="../../assets/logo.png" alt="homebrewdog logo" class="logo"></RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
};
</script>

<style>
nav {
  display:flex;
  justify-content: space-evenly;
}
</style>