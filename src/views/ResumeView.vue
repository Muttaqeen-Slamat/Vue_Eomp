<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Resume</h2>
    </div>
    <div class="row" v-if="education">
      <p class="lead" v-for="title in education" :key="title.id">
        {{ title.description }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
  },
};
</script>

<style scoped></style>
