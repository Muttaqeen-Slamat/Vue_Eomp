<template>
  <div class="container">
    <div class="row mt-3">
      <h1>About Me</h1>

    </div>
    <div class="row mb-5">
      <div class="col">
        <img src="https://i.postimg.cc/NMDmG7TR/Untitled-1.png" alt="icons">
      </div>
      <div class="col">
        <img src="https://i.postimg.cc/yYvspTWR/20231009-111117-removebg-preview.png" alt="Me">
      </div>
    </div>
    <div class="row" v-if="about">
      <p class="lead" v-for="title in about" :key="title">
        {{ title }}
      </p>   
     </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  computed: {
    about(){
      return this.$store.state.about
    }
  },
  mounted(){
    this.$store.dispatch('fetchAbout')
  }
}
</script>

<style scoped>
img{
  width: 15rem;
}
</style>
