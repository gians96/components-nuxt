<template>
  <v-row justify="center">
    <v-dialog v-model="showDialog" persistent max-width="300px">
      <v-card>
        <v-card-title>
          <span class="headline">Verificación</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  :rules="chosenValidations"
                  label="Código de verificación"
                  hint="Ejemplo: 123456"
                  type="number"
                  counter
                  maxlength="6"
                  v-model="code"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="hideDialog">Close</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="submitForm(code)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import validations from "@/utils/validations";

export default {
  data() {
    return { ...validations, code:""};
  },
  props: {
    submitForm: {
      type: Function,
      required: true
    }
  },
  computed: {
    chosenValidations() {
      let validations = [];
      validations.push(this.required("Código"));
      validations.push(this.maxLength("Código", 6));
      return validations;
    },
    showDialog: {
      get() {
        return this.$store.state.users.showDialogCodePhone;
      }
    }
  },
  methods: {
    hideDialog() {
      this.code=''
      this.$store.dispatch("users/setShowDialogCodePhone", false);
    }
  }
};
</script>