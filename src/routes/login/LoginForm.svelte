<script lang="ts">
  let username: string = "";
  let password: string = "";

  const handleLogin = async () => {
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password_hash: hash(password),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // change later if home page changes
        console.log(response.json);
        () => (window.location.href = "/");
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  // No Hashing yet, implement
  function hash(password: string): string {
    return password;
  }
</script>

<div class="form-control">
  <input
    class="usernm"
    type="text"
    placeholder="E-mail"
    bind:value={username}
  />
</div>
<div class="form-control">
  <input
    class="pswd"
    type="password"
    placeholder="Password"
    bind:value={password}
  />
</div>
<div class="form-control">
  <button on:click={() => handleLogin} class="login-button">Login</button>
</div>

<style>
  .form-control {
    margin-bottom: 10px;
  }

  .login-button {
    background: ghostwhite;
  }
</style>
