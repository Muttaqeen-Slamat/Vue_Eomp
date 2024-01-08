<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Projects</h2>
      </div>
  
      <div class="card-deck d-flex flex-row flex-wrap justify-content-evenly" v-if="projects">
        <div v-for="project in projects" :key="project.name" class="card " style="width: 18rem;">
          <img :src="project.image" class="card-img-top" :alt="`Image for ${project.name}`">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.gitHub" class="btn btn-primary" target="_blank">GitHub</a>
            <a :href="project.netlify" class="btn btn-primary" target="_blank">Visit</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      projects() {
        return this.$store.state.projects;
      }
    },
    mounted() {
      this.$store.dispatch('fetchProjects');
    }
  }
  </script>
  
  <style scoped>
  /* Add any styling specific to this component */
  </style>
  