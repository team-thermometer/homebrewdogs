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

<style scoped>
nav {
  display: flex;
}
.profile {
    margin-top: -170px;
    padding-right: 40px;

}
</style>