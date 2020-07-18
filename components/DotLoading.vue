<template>
  <div id="wave">
    <span class="dot" :style="dotColor ? `background-color:${dotColor}` : ''"></span>
    <span class="dot" :style="dotColor ? `background-color:${dotColor}` : ''"></span>
    <span class="dot" :style="dotColor ? `background-color:${dotColor}` : ''"></span>
  </div>
</template>

<script>
export default {
  props: ["dotColor"]
};
</script>

<style scoped>
div#wave {
  min-height: 15px;
}

div#wave .dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 3px;
  background: #fff;
  animation: wave 1.3s linear infinite;
  position: relative;
}

div#wave.blue .dot {
  background: #0e1331;
}

div#wave .dot:nth-child(2) {
  animation-delay: -1.1s;
}

div#wave .dot:nth-child(3) {
  animation-delay: -0.9s;
}

@keyframes wave {
  0%,
  60%,
  100% {
    transform: initial;
  }

  30% {
    transform: translateY(-7px);
  }
}
</style>
