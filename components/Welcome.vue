<template>
  <v-container grid-list-md>
    <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item :key="i" v-for="i in 5">
        <v-layout row>
          <v-flex xs4 :key="j" v-for="j in 3">
            <img :src="'https://placehold.it/380x500/?text=' + i + '-' + j" alt />
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>

    <v-layout row wrap class="mt-5">
      <v-flex v-for="n in 4" :key="n" xs12 md3>
        <v-card class="my-5">
          <v-img height="150" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          <v-card-title>Cafe Badilico</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>
            <div class="my-2 subtitle-1">S/. 25.00 - Italian, Cafe</div>
            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>Ver</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>
