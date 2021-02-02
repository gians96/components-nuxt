<template>
  <v-parallax
    id="features"
    :src="require('@/static/img/fondo4.svg')"
    :height="$vuetify.breakpoint.smAndDown ? 1500 : 800"
  >
    <v-container class="text-center">
      <h1 id="pilares" class="display-2 font-weight-bold mb-6">PILARES</h1>
      <v-row class="py-3">
        <v-col
          v-for="({ icon, title, text, color }, i) in features"
          :key="i"
          cols="12"
          md="6"
          lg="3"
        >
          <v-card
            class="py-6 px-2"
            :color="color"
            elevation="20"
            shaped
            height="320px"
          >
            <v-theme-provider dark>
              <div>
                <v-avatar color="transparent" size="88">
                  <v-icon large v-text="icon"></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>
            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            ></v-card-title>

            <v-card-text class="subtitle-1" v-text="text"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>