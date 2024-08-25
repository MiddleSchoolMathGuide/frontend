<script lang="ts">
</script>

<div class="container"><div class="dual-ring"><p class="text"><bold>M</bold></p></div></div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .dual-ring,
  .dual-ring:after {
    box-sizing: border-box;
    position: relative;
  }
  .dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    font-size: 30px;
    color: currentColor;
  }
  .dual-ring:after {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 50%;
    border: 10px solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: dual-ring 1.2s linear infinite;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: 500;
    transform: translate(30%, -50%);
    font-size: 24px; 
    color: currentColor;
    z-index: 1;
  }

  @keyframes dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
