<template>
  <div>
    <v-container>
      <v-row>
        <h1 class="error" v-if="!Courses.length">No card here 🚷</h1>
        <v-col
          md="4"
          class="mx-auto"
          v-for="singleCourse in Courses"
          :key="singleCourse.id"
        >
          <v-card max-width="344" height="400">
            <v-card-title>{{ singleCourse.title }}</v-card-title>
            <v-img :src="singleCourse.photo" height="200px"></v-img>
            <div class="d-flex justify-space-around mt-6 bottom">
              <div class="d-flex">
                <h3 class="mr-5">{{ singleCourse.video_count }} videos</h3>
                <h3>{{ singleCourse.exam_count }} Exams</h3>
              </div>
              <div>{{ singleCourse.price }} taka</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AllCataforis",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["Courses", "isLoading"]),
  },
  created() {
    if (this.Courses && this.Courses.length < 1) {
      this.getData();
    }
  },
  methods: {
    ...mapActions(["getData"]),
  },
};
</script>
<style lang="scss">
.error {
  width: 100%;
  background-color: rgb(114, 15, 15);
  color: wheat;
  margin-top: 50px;
}
</style>
