<template>
  <router-view :isLoggedIn="isLoggedIn" :signOut="signOut" :logIn="logIn" />
</template>

<script>
import AuthenticationService from "./services/AuthenticationService";
export default {
  data() {
    return {
      isLoggedIn: null,
    };
  },
  methods: {
    async checkLoggedIn() {
      //Check token
      const token = await JSON.parse(localStorage.getItem("token"));

      if (token) {
        const JWT = token.token;
        const jwtPayload = JSON.parse(window.atob(JWT.split(".")[1]));
        const exp = jwtPayload.exp;
        const now = parseInt(String(Date.now() / 1000));

        //Token expired
        if (exp - now < 0) {
          this.isLoggedIn = false;
          this.$router.push({ name: "login" });
        } else {
          this.isLoggedIn = true;
        }
      }
    },
    signOut() {
      this.isLoggedIn = false;
      AuthenticationService.logout();
      this.$router.push({ name: "login" });
    },
    logIn() {
      this.isLoggedIn = true;
    },
  },
  async mounted() {
    await this.checkLoggedIn();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
