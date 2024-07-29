<script>
  import Header from "./Header.svelte";
  import Home from "./Home.svelte";
</script>

<Header />
<div class="home-background">
  <Home />
</div>

<style>
  .home-background {
    background-color: #f2f2f2;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
</style>
