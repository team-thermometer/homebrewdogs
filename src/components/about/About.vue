<template>
  <div>
    <h1>About Us</h1>
    <section>
      <Bio name="Cari Palazzolo"
        image="../assets/caripalazzolo.jpg"
        blurb="Cari is a full-stack developer who enjoys biking around 
          Portland, going on hikes and sipping delicious IPA’s. 
          Her favorite Brewdog beer is the Punk IPA."/>

      <Bio name="Dyanna &quot;Dee&quot; Tolman"
        image="../assets/profile.jpg"
        blurb="Dyanna is currently a student at Alchemy Code Lab. She 
          enjoys traveling, trying new restaurants and spending time 
          with her family. Although she prefers sipping on Kombucha, 
          she thinks Electric India from Brewdog sounds amazing."/>

      <Bio name="Aaron Dennis"
        image="../assets/AboutMePic.jpg"
        blurb="Aaron is a climber, traveler, software developer, and 
          amateur chef. He has actually visited the BrewDog main brewery 
          in Edinburgh, Scotland. His favorite BrewDog beer is Punk IPA."/>

      <Bio name="Drew Van Valkenburg"
        image="../assets/profile_pic.jpg"
        blurb="Drew is an avid reader, web developer, snowboarder and 
          basketball player. His favorite beer is Fresh Squeezed IPA."/>

    </section>
  </div>
</template>

<script>
import Bio from './Bio';

export default {
  components: {
    Bio
  }
}
</script>

<style scoped>
h1 {
  background-color: #00afdb;
}
</style>