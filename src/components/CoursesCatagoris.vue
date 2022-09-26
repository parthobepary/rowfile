<template>
  <div>
    <div class="tex-center">
      <h1 class="mb-15">All products route</h1>
      <hr />
      <div class="mt-10">
        <v-row class="mb-6" no-gutters>
          <v-col md="3">
            <template>
              <v-btn @click="shoAgain" depressed :disabled="false">
                Disabled
              </v-btn>
              <v-row justify="center" class="mr-8 mt-5">
                <v-expansion-panels accordion>
                  <v-expansion-panel
                    v-for="catagory in chatagoris"
                    :key="catagory.id"
                  >
                    <v-expansion-panel-header>{{
                      catagory.name
                    }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-radio-group>
                        <v-radio
                          v-for="singleData in catagory.children"
                          :key="singleData.id"
                          :label="singleData.name"
                          :value="singleData.slug"
                          @click="filterSearch(singleData.slug)"
                        ></v-radio>
                      </v-radio-group>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
            </template>
          </v-col>
          <v-col offset-sm="2" md="9" offset-md="0">
            <AllCatagorisLoad />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AllCatagorisLoad from "./AllCatagorisLoad.vue";
export default {
  name: "CoursesCatagoris",
  components: {
    AllCatagorisLoad,
  },
  data() {
    return {
      chatagoris: [],
      isLoading: false,
      radios: null,
    };
  },
  created() {
    if (this.chatagoris || this.chatagoris.length < 1) {
      this.init();
    }
  },
  methods: {
    ...mapActions(["grtCoursesData", "getData"]),
    async init() {
      this.isLoading = true;
      await this.axios
        .get(
          "https://frosty-bern-acwuycxv7kid.vapor-farm-f1.com/api/course-category/all"
        )
        .then((res) => {
          this.chatagoris = res.data.data;
          this.isLoading = false;
        });
    },
    shoAgain() {
      this.getData();
    },
    filterSearch(queryApi) {
      this.grtCoursesData(queryApi);
    },
  },
};
</script>
<style lang="scss">
.tex-center {
  text-align: center;
}
</style>
