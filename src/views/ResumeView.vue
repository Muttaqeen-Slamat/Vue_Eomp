<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Resume</h2>
    </div>
    <div class="card-deck d-flex flex-row flex-wrap justify-content-evenly" v-if="education">
        <div v-for="education in education" :key="education.id" class="card " style="width: 18rem;">
          <img :src="education.logo" class="card-img-top" :alt="`Image for ${education.place}`">
          <div class="card-body">
            <h5 class="card-title">{{ education.place }}</h5>
            <p class="card-text">{{ education.description }}</p>
            
          </div>
        </div>
      </div>
    <div class="card-deck d-flex flex-row flex-wrap justify-content-evenly" v-if="skills">
        <div v-for="skills in skills" :key="skills.id" class="card " style="width: 18rem;">
          <img :src="skills.image" class="card-img-top" :alt="`Image for ${skills.title}`">
          <div class="card-body">
            <h5 class="card-title">{{ skills.title }}</h5>
            <p class="card-text">{{ skills.experience }}</p>
            
          </div>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation",);
    this.$store.dispatch("fetchSkills",);
  },
};
</script>

<style scoped></style>
