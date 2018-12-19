<template>
  <div id="app">
    <Header/>
    <nav v-if="user">
        <RouterLink to="/profile" class="profile">Profile</RouterLink>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/beers">Beers List</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <a href="#" @click="handleLogout">Logout</a>
    </nav>

    <main>
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

<style scoped>
main {
  padding-top: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  display:flex;
  justify-content: space-evenly;
}
</style>