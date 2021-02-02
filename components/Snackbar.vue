<template>
  <v-snackbar
    
    :right="disize"
    timeout="4000"
    transition="scroll-y-transition"
    color="white"
    v-model="show"
  >
    <v-alert text class x-small dense :type="type">{{message}}</v-alert>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      posnack: false,
      message: "",
      type: "info"
    };
  },
  created: function() {
    this.$store.watch(
      state => state.snackbar.message,
      () => {
        const msg = this.$store.state.snackbar.message;
        if (msg !== "") {
          this.show = true;
          this.message = this.$store.state.snackbar.message;
          this.type = this.$store.state.snackbar.type;

          //nose muy que hace esto, supongo que reset data del objecto snacbar :V
          this.$store.commit("snackbar/SET_SNACK", { message: "", type: "" });
        }
      }
    );
  },
  mounted() {
   
  },
  computed: {
    disize() {
      let val= false
      if (this.$vuetify.breakpoint.smAndDown) {
        val = false;
      } else {
        val = true;
      }
      return val;
    }
  }
};
</script>

<style scoped>
.v-alert {
  /* margin-bottom: -8px;
  margin-top: -11px;
  margin-right: -20px;
  margin-left: -11px; */
  /* margin: 0;
  padding: 1px 13px; */
}
</style>