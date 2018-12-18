<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="keyword">
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
      keyword: ''
    };
  },
  methods: {
    handleSubmit() {
      this.onSearch(this.keyword);
    }
  }
};
</script>

<style>

</style>