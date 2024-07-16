<script lang="ts">
  export let reason: string = "Your access to MSMG has been blocked";
</script>

<div class="blocked-page">
  <h1>
    <strong>Blocked</strong>
  </h1>
  <p>{reason}</p>
</div>


<style>
  .blocked-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #f8f8f8;
    text-align: center;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
</style>