<template>
    <form @submit.prevent="handleSubmit">
      <h1>Search Beers</h1>
        Keyword: <input v-model="keyword" required v-focus pattern="[^\s]+">
        <button>Search</button>
    </form>
</template>

<script>
export default {
  props: {
    onSearch: Function
  },
  data() {
    return {
      search: '',
      keyword: this.search
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
          search: this.keyword
        }
      });
    }
  }
};
</script>

<style>
body {
  margin: 0px;
}

</style>