<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Testimonials</h2>
    </div>
  </div>

  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" v-if="testimonials">
    <div v-for="testimonials in testimonials" :key="testimonials.name" class="carousel-inner" >
      <div class="carousel-item active">
        <img :src="testimonials.profile" class="d-block w-100" :alt="`Image for ${testimonials.name}`">
        <h2>{{ testimonials.name }}{{ testimonials.surname }}</h2>
        <p>{{ testimonials.quotes }}</p>
      </div>
      <div class="carousel-item">
        <img src="" class="d-block w-100" alt="..." >
      </div>
      <div class="carousel-item">
        <img src="" class="d-block w-100" alt="..." >
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.tesimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTesimonials");
  },
};
</script>

<style scoped></style>
