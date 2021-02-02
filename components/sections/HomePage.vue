<template>
  <v-img
    :max-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
    :src="background"
    class="white--text"
  >
    <v-container class="fill-height">
      <v-responsive
        class="d-flex align-center justify-center"
        height="100%"
        max-width="100%"
        width="100%"
      >
        <v-row
          :class="[
            $vuetify.breakpoint.smAndDown ? 'pt-5 pb-0 mb-0' : 'pb-10 pt-16'
          ]"
          align="center"
          justify="center"
        >
          <v-col cols="12" xs="12" sm="6" md="6">
            <v-col
              cols="12"
              :class="[
                [$vuetify.breakpoint.smAndDown ? 'pb-0 mb-0' : ''],
                [$vuetify.breakpoint.smAndDown ? 'text-center' : 'text-left']
              ]"
            >
              <span
                :class="[
                  [$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3'],
                  'font-weight-black ',
                  colortitle
                ]"
                >{{ title }}
              </span>
            </v-col>
            <v-col
              cols="12"
              :class="[
                [
                  $vuetify.breakpoint.smAndDown ? 'pt-0 pb-0 mb-0' : 'pt-0 pb-0'
                ],
                [$vuetify.breakpoint.smAndDown ? 'text-center' : 'text-left']
              ]"
            >
              <span
                :class="[
                  [$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2'],
                  'font-weight-black ',
                  colorTextAnimate
                ]"
              >
                <TextAnimate :words="wordstextanimate" />
              </span>
            </v-col>
            <v-col
              cols="12"
              :class="[
                [$vuetify.breakpoint.smAndDown ? 'pt-2 pb-0 mb-0' : ''],
                colorsubtitle,
                [$vuetify.breakpoint.smAndDown ? 'text-center' : 'text-left']
              ]"
            >
              <span
                :class="[
                  [$vuetify.breakpoint.smAndDown ? 'subheading' : 'title']
                ]"
              >
                {{ subtitle }}
              </span>
            </v-col>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="6"
            md="6"
            align="center"
            justify="center"
          >
            <v-img
              contain
              aspect-ratio="1.2778"
              max-width="500px"
              :src="imagen"
            ></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12" align="center">
            <v-btn outlined x-large class="white--text">
              <b>Ver planes</b></v-btn
            >
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-img>
</template>
<script>
import TextAnimate from "~/components/utils/TextAnimate";

export default {
  data() {
    return {
      algo: ""
    };
  },
  components: { TextAnimate },
  props: {
    imagen: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    colortitle: {
      type: String,
      required: true
    },
    colorTextAnimate: {
      type: String,
      required: true
    },
    wordstextanimate: {
      type: Array,
      required: true
    },
    colorsubtitle: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
