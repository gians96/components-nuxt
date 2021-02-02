<template lang="">
  <div class="demo1">
    <v-container class="fill-height">
      <v-responsive
        class="d-flex align-center justify-center"
        height="100%"
        max-width="100%"
        width="100%"
      >
        <v-card class="mx-auto elevation-12" max-width="25em" color="white">
          <v-card-text class="text-center">
            <v-toolbar-title
              :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'headline']"
              >SETTINGS</v-toolbar-title
            >
          </v-card-text>

          <v-card-text>
          Wallet
          </v-card-text>
          <div class="text-center align-center">
            <span class="font-weight-light text-center">loremOccaecat tempor magna nostrud ea magna laborum ex dolore irure in eu adipisicing.</span></span></span>
          </div>
          <v-card-text>
            
              Ullamco consectetur laboris non qui ad incididunt aute do magna commodo enim elit.
           
          </v-card-text>
        </v-card>
      </v-responsive>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: "account"
};
</script>
<style lang="scss">
.demo1 {
  // background: radial-gradient(circle at center, #951313 2%, #180701 100%);
  // background: radial-gradient(circle at center, rgba(27, 27, 27, 0.8), rgba(0, 0, 0, 0.8) 100%);
  position: absolute;

  width: 100%;
  height: 100%;

  overflow: hidden;
}
</style>
