<template>
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.smAndDown ?true:false"
    v-model="drawer"
    :mini-variant="false"
    :clipped="false"
    fixed
    app
    :color="colorGl.ctheme"
  >
  <!-- <v-navigation-drawer
    v-if="$auth.loggedIn"
    v-model="drawer"
    :mini-variant="false"
    :clipped="false"
    fixed
    app
    :color="colorGl.ctheme"
  > -->
    <!-- <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title white--text" v-text="title"></v-list-item-title>
        <v-list-item-subtitle class="white--text">Dashboard: {{$auth.user.name}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item> -->
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i.title" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text" v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["miniVariant", "clipped"],
  data() {
    return {
      title: "Delivery App",
      items: [
        {
          icon: "mdi-apps",
          title: "Login",
          to: "/login"
        },
        {
          icon: "mdi-apps",
          title: "Registro",
          to: "/register"
        },
        {
          icon: "mdi-apps",
          title: "Inicio",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ]
    };
  },
  computed: {
    drawer: {
      get() {
        if(!this.$vuetify.breakpoint.smAndDown){
          this.$store.commit("drawerss", false);
          console.log("entra 111111");
        }
        
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("drawerss", val);
      }
    },
    colorGl: {
      get() {
        return this.$store.state.color.colorGl;
      }
    }
  }
};
</script>
