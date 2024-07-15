<script lang="ts">
  import LoginForm from "./LoginForm.svelte";
</script>

<div class="container">
  <div class="login">
    <h3>Login</h3>
    <LoginForm />
  </div>
</div>

<style>
  .container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login {
    max-width: 300px;
    text-align: center;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
</style>
