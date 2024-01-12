<template>
  <div class="container">
    <div class="row">
      <h1 >Testimonials</h1>
    </div>
  </div>

  <div class="card-deck d-flex flex-row flex-wrap justify-content-evenly rcard" v-if="testimonials">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="card " style="width: 18rem;">
          <img :src="testimonial.profile" class="card-img-top" :alt="`Image for ${testimonial.name}`">
          <div class="card-body">
            <h5 class="card-title">{{ testimonial.name }} {{ testimonial.surname }}</h5>
            <p class="card-text">{{ testimonial.quotes }}</p>
          </div>
        </div>
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
.rcard{
  gap: 40px;
}
</style>
