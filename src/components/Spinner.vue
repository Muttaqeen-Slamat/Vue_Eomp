<template>
    <div class="d-flex justify-content-center align-items-center" id="spin">
        <div class="square-circle-5"></div>

    </div>
</template>


<script>
    export default {
        name: 'SpinnerComp',
    }
</script>

<style>
#spin {
    height: 75vh;
}

.square-circle-5 {
  width:65px;
  aspect-ratio:1;
  position:relative;
}
.square-circle-5:before,
.square-circle-5:after {
  content:"";
  position:absolute;
  border-radius:50px;
  box-shadow:0 0 0 3px inset black;
  animation:sc5 2.5s infinite;
}
.square-circle-5:after {
  animation-delay:-1.25s;
  border-radius:0;
}
@keyframes sc5{
  0%    {inset:0    35px 35px 0   }
  12.5% {inset:0    35px 0    0   }
  25%   {inset:35px 35px 0    0   }
  37.5% {inset:35px 0    0    0   }
  50%   {inset:35px 0    0    35px}
  62.5% {inset:0    0    0    35px}
  75%   {inset:0    0    35px 35px}
  87.5% {inset:0    0    35px 0   }
  100%  {inset:0    35px 35px 0   }
}
</style>