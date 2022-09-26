<template>
  <div>
    <v-row>
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
    ...mapGetters(["Courses"]),
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
<style lang="scss"></style>
