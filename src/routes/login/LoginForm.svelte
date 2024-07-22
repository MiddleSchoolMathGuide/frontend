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
          password_hash: await sha256(password),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // change later if home/me page changes
        console.log(response.json);
        window.location.href = "/user/me";
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  async function sha256(data: string): Promise<string> {
    return Array.from(
      new Uint8Array(
        await crypto.subtle.digest("SHA-256", new TextEncoder().encode(data))
      )
    ).reduce((acc, b) => acc + b.toString(16).padStart(2, "0"), "");
  }
</script>

<div class="form-control">
  <input
    class="usernm"
    type="text"
    placeholder="Username"
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
  <button on:click={() => handleLogin()} class="login-button">Login</button>
  <p style="font-size: 10px"><a href="../signIn">No account? Make one here</a></p>
</div>

<style>
  .form-control {
    margin-bottom: 10px;
  }

  .login-button {
    background: ghostwhite;
  }
</style>
