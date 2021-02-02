<template>
  <div class="component mb-2">
    <VuePhoneNumberInput
      default-country-code="PE"
      :color="colorGl.cform"
      v-model="yourValue"
      @update="onUpdate"
      clearable
    ></VuePhoneNumberInput>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="isvalid"
        block
        rounded
        @click="submitForm(propResults)"
        :color="colorGl.ctheme"
        class="white--text"
      >ENVIAR</v-btn>
    </v-card-actions>
    <!-- {{yourValue}}
    {{propResults}} -->
  </div>
</template>
<script>
export default {
  name: "PhoneNumberInput",
  props: {
    submitForm: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      yourValue: null,
      propResults: null,
      isvalid: false
    };
  },
  mounted() {
    try {
      this.yourValue = "1";
      this.yourValue = "";
    } catch (error) {}
  },
  computed: {
    colorGl: {
      get() {
        return this.$store.state.color.colorGl;
      }
    }
  },
  methods: {
    onUpdate(payload) {
      try {
        this.propResults = payload;
        if (this.propResults && this.propResults.isValid) {
          this.isvalid=true;
        } else {
          this.isvalid=false;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "style-helpers";

*,
*::before,
*::after {
  box-sizing: border-box;
}

.component {
  padding: 1px;
  background: #fff;
  border-radius: 1px;
  border: 1px solid #ebebeb;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  &.options {
    margin-bottom: 1px;
  }
}

@media screen and (max-width: 1024px) {
  .components-container.flex {
    flex-direction: column;
  }
}
</style>