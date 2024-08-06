<script lang="ts">
</script>

<div class="dual-ring">M</div>

<style>
  .dual-ring,
  .dual-ring:after {
    box-sizing: border-box;
  }
  .dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
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
  @keyframes dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
