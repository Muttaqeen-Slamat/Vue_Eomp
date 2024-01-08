<template>
  <main class="container-fluid">
    <NavBar/>
    <router-view/>
  </main>
  
  
  <Footer/>
</template>

<script >
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

export default{
    component: {
      NavBar,
      Footer
    },
    components: {NavBar,Footer}
}
</script>

<style src="@/assets/css/styles.css">

</style>
