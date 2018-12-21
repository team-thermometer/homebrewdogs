<template>
  <div>
    <h1>About Us</h1>
    <section>
      <div>
        <h3>Cari Palazzolo</h3>
        <img class="profile" src= "../assets/caripalazzolo.jpg">
        <p>
          Cari is a full-stack developer who enjoys biking around Portland, going on hikes and sipping delicious IPA’s. 
          Her favorite Brewdog beer is the Punk IPA.
        </p>
      </div>
      <div>
        <h3>Dyanna "Dee" Tolman</h3>
        <img class="profile" src= "../assets/profile.jpg">
        <p>
          Dyanna is currently a student at Alchemy Code Lab and originally from Singapore. She enjoys traveling, trying new restaurants and spending time with her family.
          Although she prefers sipping on Kombucha, she thinks Electric India from Brewdog sounds amazing. 
        </p>
      </div>
      <div>
        <h3>Aaron Dennis</h3>
        <img class="profile" src= "../assets/AboutMePic.jpeg">
        <p>
          Aaron is a climber, traveler, software developer, and amateur chef. He has actually visited the BrewDog main brewery in Edinburgh, Scotland. His favorite BrewDog beer is Punk IPA.
        </p>
      </div>
      <div>
        <h3>Drew Van Valkenburg</h3>
        <img class="profile" src= "../assets/profile_pic.jpg">
        <p>
          Drew is an avid reader, web developer, economist, snowboarder and basketball player. Drew's favorite beer is Fresh Squeezed IPA
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 100vw;
}
.profile {
  vertical-align: bottom;
  width: 100%;
  height: auto;
}
</style>