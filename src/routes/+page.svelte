<script>
  import Header from "./Header.svelte";
</script>

<Header />
<div class="home-background"></div>

<style>
  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .home-background {
    background-color: #f2f2f2;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
