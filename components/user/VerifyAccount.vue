<template>
  <v-card class="mx-auto" max-width="28em">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Teléfono</v-expansion-panel-header>
        <v-expansion-panel-content>
          <PhoneNumberInput :submitForm="sendSMS" />
          <DialogCodePhone :submitForm="verifyCode" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Email</v-expansion-panel-header>
        <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import PhoneNumberInput from "~/components/PhoneNumberInput.vue";
import DialogCodePhone from "~/components/user/DialogCodePhone.vue";
export default {
  components: {
    PhoneNumberInput,
    DialogCodePhone
  },
  data() {
    return {
      showCodePhone: false,
      phone: {
        phoneNumber: "",
        countryCallingCode: "",
        formatInternational: "",
        formattedNumber: ""
      }
    };
  },
  methods: {
    async sendSMS(phone) {
      await this.$axios
        .post("/user/sendSMS", { phonenumber: phone.formattedNumber })
        .then(response => {
          this.$store.dispatch("alertMessage/setAlertMessage", {
            type: "success",
            show: true,
            msg: response.data.message
          });
          this.phone.phoneNumber = phone.phoneNumber;
          this.phone.countryCallingCode = phone.countryCallingCode;
          this.phone.formatInternational = phone.formatInternational;
          this.phone.formattedNumber = phone.formattedNumber;
          this.$store.dispatch("users/setShowDialogCodePhone", true);
        })
        .catch(error => {
          this.$store.dispatch("alertMessage/setAlertMessage", {
            type: "error",
            show: true,
            msg: error.response.data.message
          });
        });
    },
    async verifyCode(code) {
      console.log(code);

      await this.$axios
        .post("/user/verifyPhone", {
          phonenumber: this.phone.formattedNumber,
          code
        })
        .then(response => {
          this.$store.commit("snackbar/SET_SNACK", {
            message: response.data.message,
            type: "success"
          });
          this.$store.dispatch("users/setShowDialogCodePhone", false);
        })
        .catch(error => {
          this.$store.dispatch("alertMessage/setAlertMessage", {
            type: "error",
            show: true,
            msg: error.response.data.message
          });
        });
    }
  }
};
</script>