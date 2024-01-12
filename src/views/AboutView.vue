<template>
  <div class="container">
    <div class="spinner-container" v-if="loading">
      <Spinner />
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="row mt-3" v-else>
      <h1>About Me</h1>
    </div>
    <div class="row mb-5" v-if="!loading">
      <div class="col">
        <img src="https://i.postimg.cc/NMDmG7TR/Untitled-1.png" alt="icons" />
      </div>
      <div class="col">
        <img
          src="https://i.postimg.cc/yYvspTWR/20231009-111117-removebg-preview.png"
          alt="Me"/>
      </div>
    </div>
    <div class="row" v-if="about && !loading">
      <p class="lead" v-for="title in about" :key="title">
        {{ title }}
      </p>
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
    about() {
      return this.$store.state.about;
    },
  },
  mounted() {
    this.$store.dispatch("fetchAbout");

    const delay = 1000;

    setTimeout(() => {
      this.loading = false;
    }, delay);
  },
  components: { Spinner },
};
</script>

<style scoped>
img {
  width: 15rem;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
