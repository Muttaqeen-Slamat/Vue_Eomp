<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/">
        <img class="img-fluid" src="https://drive.google.com/uc?id=1gS0tCqUSm6BfTMGknR-XaduG510mc1pS" alt="Logo" loading="lazy">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link">
            Resume
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link">
            Projects
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testimonials" class="nav-link">
            Testimonials
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {

    }
</script>

<style scoped>

a {
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    padding: 0.7em 2em;
    position: relative;
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1); */
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
    content: '';
    background-color: #000000;
    z-index: -1;
  }
  
  a:hover, a:focus {
    color: white;
  }
  
  a:hover:before, a:focus:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
  }
  
  a:active {
    transform: scale(0.9);
  }
</style>