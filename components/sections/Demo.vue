<template>
  <v-img
    :max-height="'calc(105vh - ' + $vuetify.application.top + 'px)'"
    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
    :src="background"
    class=" "
    id="background"
  >
    <v-container class="fill-height">
      <v-responsive
        class="d-flex align-center justify-center"
        height="100%"
        max-width="100%"
        width="100%"
      >
        <v-row
          :class="[$vuetify.breakpoint.smAndDown ? 'pt-5' : 'pb-10 pt-16']"
          align="center"
          justify="center"
        >
          <v-col cols="12" class="text-center">
            <v-col
              cols="12"
              class="text-center"
              :class="[$vuetify.breakpoint.smAndDown ? 'pb-1' : '']"
            >
              <span
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3',
                ]"
                class="font-weight-black"
                >{{ title }}</span
              >
            </v-col>
            <v-col
              cols="12"
              class="text-center"
              :class="[$vuetify.breakpoint.smAndDown ? 'pb-1' : '']"
            >
              <p
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'subheading' : 'title',
                ]"
              >
                {{ subtitle }}
              </p>
            </v-col>
            <v-row>
              <v-col cols="12" xs="12" sm="6" lg="12" class="text-center">
                <p
                  class="credencial"
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'subheading' : 'title',
                  ]"
                >
                  USUARIO <b> {{ user }} </b>
                </p>
                <p
                  class="credencial"
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'subheading' : 'title',
                  ]"
                >
                  CONTRASEÑA <b> {{ pass }} </b>
                </p>
              </v-col>
              <v-col cols="12" xs="12" sm="6" lg="12" align="center">
                <a id="link" :href="link"
                  ><v-btn
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'x-large' : 'small',
                    ]"
                    :color="colorGl.cbtn"
                    class="white--text"
                    >Probar demo</v-btn
                  ></a
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" align="center" justify="center">
                <v-img max-width="90%" :src="imagen"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-img>
</template>
<script>
export default {
  data() {
    return {
      algo: "",
    };
  },
  computed: {
    colorGl: {
      get() {
        return this.$store.state.color.colorGl;
      },
    },
    strategies: () => [
      { key: "google", name: "Google", color: "#FFF", icon: "mdi-google" },
    ],
  },
  props: {
    imagen: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#background {
  background-color: white;
}
#link {
  text-decoration: none;
}
.credencial {
  margin-bottom: 0;
}
</style>