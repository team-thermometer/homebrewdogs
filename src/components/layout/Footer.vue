<template>
    <footer>
        <a href="https://www.brewdog.com/usa/beer-2/headliners" target="_blank" class="footer">Brewdog</a>
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
<style scoped>

.footer {
  text-decoration: none;
  padding: 20px;
  font-size: 1em;
  color: #2c3e50;
  font-weight: bold;
}
.footer:hover {
  color:#00afdb;
}

</style>
