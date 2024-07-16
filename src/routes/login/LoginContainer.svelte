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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .login {
    max-width: 400px;
    text-align: center;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
</style>
