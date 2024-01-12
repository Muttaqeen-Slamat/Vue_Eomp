<template>
  <div class="container">
    <div class="spinner-container" v-if="loading">
      <Spinner />
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="row mt-3" v-else>
      <h1>Projects</h1>
    </div>

    <div
      class="card-deck d-flex flex-row flex-wrap justify-content-evenly pcard mt-5 mb-5"
      v-if="projects && !loading">
      <div
        v-for="project in projects"
        :key="project.id"
        class="card"
        style="width: 18rem">
        <img
          :src="project.image"
          class="card-img-top"
          :alt="`Image for ${project.name}`"/>
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <a :href="project.gitHub" class="btn" target="_blank">GitHub</a>
          <a :href="project.netlify" class="btn" target="_blank">Visit</a>
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
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
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

a {
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.7em 2em;
  border: 3px solid #ffffff;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #000000;
  text-decoration: none;
  transition: 0.3s ease all;
  z-index: 1;
  margin: 8px;
}

a:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: "";
  background-color: #000000;
  z-index: -1;
}

a:hover,
a:focus {
  color: white;
}

a:hover:before,
a:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

a:active {
  transform: scale(0.9);
}

.pcard {
  gap: 40px;
}
</style>
