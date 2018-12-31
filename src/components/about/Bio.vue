<template>
  <article>
    <h3>{{name}}</h3>
    <img class="profile" :src="image">
    <p>{{blurb}}</p>
  </article>
</template>

<script>

export default {
  props: {
    name: String,
    image: String,
    blurb: String
  }
}
</script>

<style scoped>

.profile {
  vertical-align: bottom;
  width: 100%;
  height: auto;
}  
h3 {
  margin:0px;
}
p {
  padding:10px;
  vertical-align: bottom;
  width: 100%;
  height: auto;
}
</style>