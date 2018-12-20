<template>
  <section class="people">
    <h2>Beer</h2>
    <p>
      <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
      Page {{page}}
      <button @click="handlePage(1)">Next</button>
    </p>
     
    <pre v-show="error" class="error">
      {{error}}
    </pre>

  </section>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      page: 1
    };
  },
  components: {
  },
  watch: {
    $route(newRoute, oldRoute) {
      let newPage = newRoute.query.page;
      const oldPage = oldRoute.query.page;
      if(newPage === oldPage) return;
      this.page = newPage;
    }
  },
  methods: {
    handlePage(increment) {
      this.page += increment;
      this.recordPage();
    },
    recordPage() {
      this.$router.push({
        query: {
          page: this.page
        }
      });
    }
  }
};
</script>
<style>
</style>