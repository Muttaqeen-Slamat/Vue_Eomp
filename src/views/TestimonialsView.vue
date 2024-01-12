<template>
  <div class="container">
    <div class="spinner-container" v-if="loading">
      <Spinner />
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="row mt-3" v-else>
      <h1>Testimonials</h1>
    </div>
  </div>

  <div
    class="card-deck d-flex flex-row flex-wrap justify-content-evenly rcard mt-5 mb-5"
    v-if="testimonials && !loading">
    <div
      v-for="testimonial in testimonials"
      :key="testimonial.id"
      class="card"
      style="width: 18rem">
      <img
        :src="testimonial.profile"
        class="card-img-top"
        :alt="`Image for ${testimonial.name}`"/>
      <div class="card-body">
        <h5 class="card-title">
          {{ testimonial.name }} {{ testimonial.surname }}
        </h5>
        <p class="card-text">{{ testimonial.quotes }}</p>
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
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
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
