<template>
  <div class="container">
    <div class="text">
      <h1 class="display-1">
        <span style="--i: 1">Muttaqeen</span> <span style="--i: 2">Slamat</span>
      </h1>
      <h3><span style="--i: 3">An Aspiring Web Developer</span></h3>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text span {
  animation: zoomup 2s linear infinite;
  animation-delay: calc(200ms * var(--i));
}

@keyframes zoomup {
  0%,
  100% {
    color: #e4e2dd;
    filter: blur(1px);
    text-shadow: 0 0 10px #637074, 0 0 20px #e4e2dd, 0 0 30px #e4e2dd,
      0 0 40px #637074, 0 0 60px #637074, 0 0 80px #637074, 0 0 100px #637074;
  }

  5%,
  95% {
    filter: blur(0);
    color: black;
    text-shadow: none;
  }
}
</style>
