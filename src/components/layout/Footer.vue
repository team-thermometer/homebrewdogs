<template>
    <footer>
        Beer courtesy <a href="https://www.brewdog.com/usa/beer-2/headliners" target="_blank" class="footer">Brewdog Brewery</a>
    </footer>
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

<style lang="postcss" scoped>
footer {
  background: purple;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 10px;
  padding-bottom: 15px;
  color: white;
  font-size: 16px;
}
a.footer {
  color: white;
}
a.footer:hover {
  color:#00afdb;
}
</style>
