<template>
  <div class="container">
    <div class="spinner-container" v-if="loading">
      <Spinner />
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="mb-3 mt-3" v-else>
      <h1>Resume</h1>
    </div>
    <div>
      <h2 class="text-decoration-underline">Education</h2>
    </div>
    <div
      class="card-deck d-flex flex-row flex-wrap justify-content-evenly mt-5 mb-5"
      v-if="education && !loading">
      <div
        v-for="education in education"
        :key="education.id"
        class="card"
        style="width: 18rem">
        <img
          style="height:16rem; aspect-ratio: 1/1;"
          :src="education.logo"
          class="card-img-top"
          :alt="`Image for ${education.place}`"/>
        <div class="card-body">
          <h5 class="card-title">{{ education.place }}</h5>
          <p>{{ education.year }}</p>
          <p class="card-text">{{ education.description }}</p>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <h2 class="text-decoration-underline">Skills</h2>
    </div>
    <div
      class="card-deck d-flex flex-row flex-wrap justify-content-evenly rcard mt-5 mb-5"
      v-if="skills && !loading">
      <div
        v-for="skills in skills"
        :key="skills.id"
        class="card"
        style="width: 18rem">
        <img
          style="height: 14rem;"
          :src="skills.image"
          class="card-img-top"
          :alt="`Image for ${skills.title}`"/>
        <div class="card-body">
          <h5 class="card-title">{{ skills.title }}</h5>
          <p class="card-text">{{ skills.experience }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSkills");
    const delay = 1000;

    setTimeout(() => {
      this.loading = false;
    }, delay);
  },
  components: { Spinner },
};
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.rcard {
  gap: 40px;
}
</style>
