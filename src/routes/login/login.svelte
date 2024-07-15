<script lang="ts">
  export let username:string = '';
  export let password:string = '';

  const apiURL = ""
</script>
<div class="container">
  <div class="login">
    <h3>Login</h3>
    <div class="form-control">
      <input class="usernm" type="text" placeholder="E-mail" bind:value={username} />
    </div>
    <div class="form-control">
      <input class="pswd" type="password" placeholder="Password" bind:value={password} />
    </div>
    <div class="form-control">
      <button on:click class="login-button">Login</button>
    </div>
  </div>
</div>

<style>
  .container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
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
  .form-control {
    margin-bottom: 10px;
  }

  .login-button {
    background: ghostwhite;
  }

  /* Maybe add this (or something similar) to a global stylesheet later */
  button {
    padding: 0.4em;
	  margin: 0 0 0.5em 0;
	  box-sizing: border-box;
	  border: 1px solid #ccc;
	  border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #999;
  }
</style>
