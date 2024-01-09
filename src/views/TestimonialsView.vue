<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Testimonials</h2>
    </div>
  </div>

  <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel" v-if="testimonials" style="width: 18rem;">
    <div v-for="testimonial in testimonials" :key="testimonial.name" class="carousel-inner" >
      <div :class="{ 'carousel-item': true, 'active': testimonials.indexOf(testimonial) ===0}">
        <img :src="testimonial.profile" class="d-block w-100" :alt="`Image for ${testimonial.name}`">
        <h2>{{ testimonial.name }} {{ testimonial.surname }}</h2>
        <p>{{ testimonial.quotes }}</p>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>


<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>

</style>
