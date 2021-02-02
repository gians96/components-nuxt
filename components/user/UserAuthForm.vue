<template>
  <v-form v-model="valid">
    <v-text-field  
      v-model="userInfo.first_name"
      label="Nombres"
      :color="colorGl.cform"
      prepend-icon="mdi-account"
      :rules="[required('Nombres')]"
      v-if="hasName"
    />
    <v-text-field
      v-model="userInfo.last_name"
      label="Apellidos"
      :color="colorGl.cform"
      prepend-icon="mdi-account"
      :rules="[required('Apellidos')]"
      v-if="hasName"
    />
    <v-text-field
      v-model="userInfo.email"
      label="Email"
      :color="colorGl.cform"
      prepend-icon="mdi-email"
      :rules="[required('email'), emailFormat()]"
    />

    <UserAuthPassword v-model="userInfo.password" label="Password" />

      <AlertMessage/>
    <div v-if="registrationCheckboxes">
      <!-- <v-alert v-if="message" dense outlined type="error">{{message}}</v-alert> -->
      <!-- v-model connects it with the userInfo hash, value makes the :rules work -->
      <v-checkbox
        v-model="userInfo.agreeToTerms"
        value="userInfo.agreeToTerms"
        class="mr-0"
        :color="colorGl.cform"
        :rules="[required('agreeToTerms', 'You must agree to the terms and conditions and privacy policy')]"
      >
        <template #label @click.stop>
          <span>
            I have read and agree to the
            <a
              href="/policies/terms-and-conditions"
              target="_blank"
              @click.stop
            >Terms and Conditions</a>
            and
            <a
              href="/policies/privacy-policy"
              target="_blank"
              @click.stop
            >Privacy Policy</a>
          </span>
        </template>
      </v-checkbox>

      <!-- <v-checkbox
        v-model="userInfo.email_weekly"
        color="green"
        label="I would like to join the VIP list and get a weekly newsletter."
      />
      <v-checkbox
        v-model="userInfo.email_daily"
        color="green"
        label="I would like to get an email notification whenever new videos or courses are released."
      />-->
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        block
        large
        @click="submitForm(userInfo)"
        :disabled="!valid"
        :color="colorGl.cbtn"
        class="white--text"
      >{{ buttonText }}</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
import validations from "@/utils/validations";
import UserAuthPassword from "@/components/user/UserAuthPassword.vue";
import AlertMessage from "@/components/AlertMessage.vue";
export default {
  data() {
    return {
      valid: false,
      userInfo: {
        first_name: "demo-osnline",
        last_name: "demo-sonline",
        email: "demos@gmail.com",
        password: "123456789",
        agreeToTerms: true,
        email_daily: true,
        email_weekly: true
      },
      ...validations
    };
  },
  components: {
    UserAuthPassword,
    AlertMessage
  },
  props: {
    submitForm: {
      type: Function,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    hasName: Boolean,
    message: String,
    registrationCheckboxes: Boolean
  },
  computed: {
    colorGl: {
      get() {
        return this.$store.state.color.colorGl;
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
