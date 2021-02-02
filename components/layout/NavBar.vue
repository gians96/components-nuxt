<template >
  <v-app-bar dark flat fixed hide-on-scroll color="#000000dc">
    <v-toolbar-title
      class="display-1 font-weight-medium mr-0 mr-md-4 v-sheet transparent nav-title"
      
    >
      <span
        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
        class="font-weight-black red-darken-4--text"
      >
        <nuxt-link to="/" id="nubetec"
          ><strong id="tfirst">{{ title.first }}</strong
          ><strong id="tsecond">{{ title.second }}</strong></nuxt-link
        >
      </span>
    </v-toolbar-title>
    <v-spacer />

    <!-- <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="white--text" text to="/">Home</v-btn>
      <v-divider inset vertical />
      <v-btn class="ma-1 white--text" text to="/p">Pruebas</v-btn>
      <v-btn class="ma-1 white--text" text to="/dashboard" v-if="$auth.loggedIn">dashboard</v-btn>
      <v-btn v-if="!$auth.loggedIn" text to="/login">Login</v-btn>
      <v-divider inset vertical />
      <v-btn v-if="!$auth.loggedIn"  text to="/register"
        >Register</v-btn
      >
    </v-toolbar-items> -->

    <v-menu
      
      class="hidden-md-and-up"
      offset-y
      origin="right top"
      :close-on-content-click="false"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar class="ml-1" size="42" color="yellow darken-3">
          <span v-bind="attrs" v-on="on" class="headline">
            NA
          </span>
        </v-avatar>
      </template>
      <v-list class="pa-0">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">NOMBRE Y APELLIDO</v-list-item-title>
            <v-list-item-subtitle>demo@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item
            v-for="i in items"
            :key="i.text"
            @click="keyOption(i.key)"
            
          >
            <v-list-item-icon>
              <v-icon v-text="i.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="i.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-toolbar-items
      class="hidden-lg-and-up show-sm-and-up"
      v-if="$vuetify.breakpoint.smAndDown ? true : false"
    >
      <v-app-bar-nav-icon
        class="white--text"
        @click.stop="toggleDrawer()"
        v-show="$vuetify.breakpoint.smAndDown"
      />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: { first: " Nube", second: "Tec " },
    };
  },
  computed: {
    url() {
      return this.$route.name;
    },
    items: () => [
      {
        icon: "mdi-cog",
        text: "Cuenta",
        key: "account/trust",
      },
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        key: "dashboard",
      },
      {
        icon: "mdi-account-arrow-right",
        text: "Cerrar Sesión",
        key: "logout",
      },
    ],
    colorGl: {
      get() {
        return this.$store.state.color.colorGl;
      },
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    options(opt) {
      this.$router.push(opt);
    },
    keyOption(key) {
      if (key === "account/trust") {
        this.$router.push("account/trust");
      }
      if (key === "dashboard") {
        this.$router.push("dashboard");
      }
      if (key === "logout") {
        this.$router.push("/");

        // this.$auth.logout();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
// .v-app-bar--is-scrolled{
//   background:radial-gradient(circle at center,rgba(107, 2, 2, 0.4),rgba(107, 2, 2, 0.4) 100%);

// }
#nubetec {
  text-decoration: none;
  color: white;
  text-shadow: 0.1em 0.1em 0.3em #4a47474a;
}
#tfirst {
  color: #ce0c0c;
}
#tsecond {
  color: white;
}
#ñ{
  color:#000000dc
}

</style>