<template>
  <div>
    <v-text-field
      :value="value"
      @input="$emit('input', $event)"
      :label="label"
      :color=colorGl.cform
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      counter="true"
      :rules="chosenValidations"
       prepend-icon="mdi-lock"
    />
  </div>
</template>

<script>
import validations from "@/utils/validations";
export default {
  data() {
    return {
      ...validations,
      showPassword: false
    };
  },
  computed: {
    chosenValidations() {
      let validations = [];
      if (this.passwordRequired) {
        validations.push(this.required("password"));
      }
      validations.push(this.minLength("password", 8));
      return validations;
    },colorGl: {
      get() {
        return this.$store.state.color.colorGl;
      }
    }
  },
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: "Password"
    },
    passwordRequired: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
