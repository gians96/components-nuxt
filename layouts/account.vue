<template>
  <v-app>
    <no-ssr>
      <NavBar></NavBar>
      <NavBarAccount></NavBarAccount>
      <!-- <SideBar v-if="url == 'dashboard'"></SideBar> -->
      <SideBar></SideBar>
    </no-ssr>
    <v-main>
      <nuxt />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from "~/components/layout/NavBar";
import NavBarAccount from "~/components/layout/NavBarAccount";
import Footer from "~/components/layout/Footer";
import Snackbar from "~/components/Snackbar.vue";
import SideBar from "~/components/layout/SideBar.vue";

export default {
  name: "default",
  components: {
    NavBar,
    Footer,
    Snackbar,
    SideBar,
    NavBarAccount
  },
  created() {
    
  },
  computed: {
    url() {
      return this.$route.name;
    }
  }
};
</script>
<style scoped>
.v-application {
  
  background: linear-gradient(
    to bottom right,
    rgba(2, 4, 12, 0.8),
    rgba(5, 11, 31, 0.8) 100%
  );

  overflow: hidden;
}
</style>
