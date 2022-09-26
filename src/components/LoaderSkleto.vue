<template>
  <v-container>
    <v-skeleton-loader
      height="100px"
      width="100%"
      v-bind="attrs"
      type="card-avatar, article, actions"
      v-if="isLoading"
    ></v-skeleton-loader>
    <v-row>
      <v-col cols="12" md="3">
        <v-skeleton-loader
          height="100vh"
          v-bind="attrs"
          type="card-avatar, article, actions"
          v-if="isLoading"
        ></v-skeleton-loader>
      </v-col>

      <v-col cols="12" md="9">
        <v-skeleton-loader
          height="100vh"
          v-bind="attrs"
          type="article, actions"
          v-if="isLoading"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "LoaderSkleto",
  data() {
    return {
      attrs: {
        class: "mb-6",
        boilerplate: true,
        elevation: 2,
      },
    };
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
};
</script>
