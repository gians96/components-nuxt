<template>
  <section id="hero">
    <div id="inspire">
      <v-carousel cycle height="100%" hide-delimiters show-arrows-on-hover>
        <v-carousel-item
          :src="carousel.background"
          v-for="(carousel, i) in carousels"
          :key="i"
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
                  $vuetify.breakpoint.smAndDown ? 'pt-5' : 'pb-10 pt-16',
                ]"
                align="center"
                justify="center"
              >
                <v-col cols="12" class="text-center" xs="12" sm="6" md="6">
                  <v-col
                    cols="12"
                    class="text-center"
                    :class="[$vuetify.breakpoint.smAndDown ? 'pb-1' : '']"
                  >
                    <span
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-1'
                          : 'display-3',
                      ]"
                      class="font-weight-black"
                      >{{ carousel.title }}</span
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
                      {{ carousel.subtitle }}
                    </p>
                  </v-col>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6">
                  <v-img
                    contain
                    aspect-ratio="1.2778"
                    max-width="500px"
                    :src="carousel.image"
                  ></v-img>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="carousel.key.type == 'in'"
                  cols="12"
                  xs="12"
                  align="center"
                >
                  <v-btn outlined x-large :to="carousel.key.url">Ver mas</v-btn>
                </v-col>
                <v-col
                  v-if="carousel.key.type == 'out'"
                  cols="12"
                  xs="12"
                  align="center"
                >
                  <a id="link" :href="carousel.key.url"
                    ><v-btn outlined x-large>Ver mas</v-btn></a
                  >
                </v-col>
              </v-row>
            </v-responsive>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      :src="require('@/static/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']"
            class="font-weight-black"
            >Servicios Tecnológicos</span
          >
          <br />

          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']"
            class="font-weight-light"
          >
            para el
            <b>mundo</b>
          </span>
          <br />
          <br />

          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'title' : 'headline']"
            class="font-weight-light text-sm-left"
            >Nuestro fin es acompañar los procesos de nuestros clientes, usando
            tecnología robusta, segura y de alta disponibilidad, reuniendo al
            mejor equipo de profesionales en TI</span
          >
          <br />
          <br />

          <div
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'flex-column align-start'
                : 'align-center'
            "
            class="d-flex flex-wrap"
          >
            <v-btn class="pa-6" color="red" @click="$vuetify.goTo('#servicios')"
              >Ver servicios</v-btn
            >
          </div>
        </v-responsive>
      </v-container>
    </v-img>

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
    <section id="servicios">
      <v-row no-gutters>
        <v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                    ]"
                    class="font-weight-light"
                    >WELCOME TO</span
                  >

                  <br />

                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4',
                    ]"
                    class="font-weight-black"
                    >VUETIFY</span
                  >
                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#about-me')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>
  </section>
</template>

<script>
export default {
  name: "SectionHero",
  data() {
    return {
      features: [
        {
          icon: "mdi-glasses",
          title: "Transparencia",
          color: "blue lighten-1",
          text:
            "La ejecución del personal no seria posible sin una absoluta transparencia en los procesos, disponiendo informacion precisa y disponible en todo lugar.",
        },
        {
          icon: "mdi-account-group-outline",
          title: "Colaboración",
          color: "purple lighten-1",
          text:
            "Nos integramos con nuestros proveedores y clientes para mejorar la calidad del servicio dia a dia, con actualizaciones continuas. ",
        },
        {
          icon: "mdi-heart",
          title: "Hazlo increible",
          color: "red lighten-1",
          text:
            "Trabajamos sin barreras jerárquicas ni funcionalidades para el logro de objetvios comunes. Siempre abiertos a dar y recibir aportes que generen sinergía y valor.",
        },
        {
          icon: "mdi-book-open",
          title: "Formación",
          color: "teal lighten-1",
          text:
            "Nos preocupamos constantemente en mantenernos capacitado con las nuevas tecnologias emergentes en el mercado, para proveer las ultimas tecnologias.",
        },
      ],
      data: [
        {
          _id: "1",
          title: "FACTURACIÓN ELECTRÓNICA",
          subtitle:
            "Sistema de facturación completo, genera tus comprobantes de forma rapida y segura, envio directo a SUNAT.",
          image: "../carousel/image/fact-elec2.svg",
          background: "../carousel/background/bg2.svg",
          key: { type: "in", url: "facturacion-electronica" },
        },
        {
          _id: "2",
          title: "DISEÑO Y DESARROLLO",
          subtitle:
            "Desarrollamos aplicaciones, programas y sistemas para cualquier tipo de empresa, con las ultimas tendencias en lenguaje de programación.",
          image: "../carousel/image/design3.svg",
          background: "../carousel/background/bg3.svg",
          key: { type: "in", url: "out" },
        },
        {
          _id: "3",
          title: "SISTEMAS DE SEGURIDAD",
          subtitle:
            "Servicio de sistemas de seguridad como camaras de vigilancia y alarmas, monitorizadas desde smartphone.",
          image: "../carousel/image/home-camara1.svg",
          background: "../carousel/background/bg1.svg",
          key: { type: "in", url: "out" },
        },
        {
          _id: "4",
          title: "TIENDA ON-LINE",
          subtitle: "Venta de productos tecnologicos en general",
          image: "../carousel/image/store.svg",
          background: "../carousel/background/bg4.svg",
          key: { type: "out", url: "https://store.nube-tec.com" },
        },
      ],
    };
  },
  provide: {
    theme: { isDark: true },
  },
  mounted() {
    // const index = this.carousels.findIndex((item) => item._id === "1");
    // this.carousels.splice(index, 1);
  },
  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";
      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
    carousels() {
      return this.data;
    },
  },
  methods: {
    redirectURL(key) {
      this.$router.push(key.url);

      console.log("entra metodos");
    },
  },
};
</script>
<style lang="scss" scoped>
#inspire {
  height: 100vh;
  color: to right, rgba(219, 221, 226, 0.8), rgba(155, 164, 192, 0.8);
}
#link {
  text-decoration: none;
}
#pilares {
  // background: linear-gradient(
  //   to right,
  //   #f36a2847,
  //   #f36a2847
  // );
  text-shadow: 0.1em 0.1em 0.2em #9a8798;
  //  background: linear-gradient(45deg, #ffffff, transparent);
}
</style>