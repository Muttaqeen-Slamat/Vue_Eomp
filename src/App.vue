<template>
  <main class="container-fluid">
    <NavBar/>
    <router-view/>
  </main>
  

</template>

<script >
import NavBar from './components/NavBar.vue';

export default{
    component: {
        NavBar
    },
    components: { NavBar }
}
</script>

<style src="@/assets/css/styles.css">

</style>
