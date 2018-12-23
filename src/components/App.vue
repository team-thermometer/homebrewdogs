<template>
  <div id="app">
    <Header/>
    <nav v-if="user">
      <RouterLink class="nav" to="/">Home</RouterLink>
      <RouterLink class="nav" to="/beers">Beers List</RouterLink>
      <RouterLink class="nav" to="/profile">Profile</RouterLink>
      <RouterLink class="nav" to="/about">About Us</RouterLink>
      <a class="nav" href="#" @click="handleLogout">Logout</a>
    </nav>
    <main class="content">
      <RouterView v-if="user" :user="user"/>
      <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"
      />
    </main>
    <Footer/>
  </div>
</template>

<script>
import api from '../services/api';
import Header from './layout/Header';
import Auth from './auth/Auth';
import Footer from './layout/Footer';

export default {
  name: 'app',
  data() {
    return {
      result: null,
      user: null,
    };
  },
  components: {
    Header,
    Footer,
    Auth
  },
  created() {
    const json = window.localStorage.getItem('profile');
    if(json) {
      this.setUser(JSON.parse(json));
    }
  },
  methods: {
    handleSignUp(profile) {
      return api.signUp(profile)
        .then(user => {
          this.setUser(user);
        });
    },
    handleSignIn(credentials) {
      return api.signIn(credentials)
        .then(user => {
          this.setUser(user);
        });
    },
    setUser(user) {
      this.user = user;
      if(user) {
        api.setToken(user.token);
        window.localStorage.setItem('profile', JSON.stringify(user));
      }
      else {
        api.setToken();
        window.localStorage.removeItem('profile');
      }
    },
    handleLogout() {
      this.setUser(null);
      this.$router.push('/');
    }
  }
};
</script>

<style lang="postcss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.2em; 
}
nav {
  display:flex;
  justify-content: space-evenly;
  /* border-bottom: 1px solid purple; */
}
.nav {
  text-decoration: none;
  color: #30313A;
  font-weight: bold;
}
.nav:hover {
  color:#00afdb;
}
.content {
  min-height: 65vh;
}
span {
  font-size: 16px;
}
</style>