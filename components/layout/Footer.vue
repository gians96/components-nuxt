<template>
  <div>
    <v-footer padless color="transparent">
      <v-card-text class="py-2 text-center white--text">
        Design —
        <strong>@gians96</strong>
      </v-card-text>
    </v-footer>
    <v-footer color="black">
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>Nube Tecnológica S.A.C.</strong>
      </v-card-text>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: true
    };
  }
};
</script>
