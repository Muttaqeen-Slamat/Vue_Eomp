<template>
  <div class="container">
    <div class="spinner-container" v-if="loading">
      <Spinner />
    </div>
    <div class="slide-in-right" v-else>

      <div class="row mt-3">
        <h1>About Me</h1>
      </div>
      <div class="row mb-5" v-if="!loading">
        <div class="col">
          <img style="padding-top: 12px;" src="https://i.postimg.cc/NMDmG7TR/Untitled-1.png" alt="icons" />
        </div>
        <div class="col">
          <img
          style="border-radius: 25px;"
          src="https://i.postimg.cc/wMC0hSFH/Mutta-croped.jpg"
          alt="Me"/>
        </div>
      </div>
      <div class="row" v-if="about && !loading">
        <p class="lead" v-for="title in about" :key="title">
          {{ title }}
        </p>
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

.container{
  height: 100vh;
}


.slide-in-right {
  opacity: 0;
  animation: slide-in-right 1s ease-in forwards;
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
