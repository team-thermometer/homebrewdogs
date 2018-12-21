<template>
    <form @submit.prevent="handleSubmit">
      <h1>Search Beers</h1>
        Name: <input v-model="keyword">
        <button>Search</button>
    </form>
</template>

<script>
export default {
  props: {
    search: String,
    onSearch: Function
  },
  data() {
    return {
      keyword: this.search || ''
    };
  },
  watch: {
    search(newSearch) {
      if(this.keyword !== newSearch) {
        this.keyword = newSearch;
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        query: {
          search: encodeURIComponent(this.keyword)
        }
      });
    }
  }
};
</script>

<style scoped>

</style>