<template>
  <v-alert v-if="message.show" dense outlined :type="message.type">{{message.msg}}</v-alert>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    message: {
      get() {
        return this.$store.state.alertMessage.message;
      }
    }
  }
};
</script>