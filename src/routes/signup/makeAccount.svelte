<script lang="ts">
  import { sha256 } from "$lib/utils/crypto";

  let username: string = "";
  let password: string = "";
  let email: string = "";
  let passwordCheck: string = "";
  let canLogin: boolean = false;

  const alignPassword = () => {
    canLogin = password === passwordCheck;
  };

  const isMail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function createAccount() {
    if (!canLogin) {
      alert("Password Inputs Do Not Match");
      return;
    }

    if (!isMail(email)) {
      alert("Invalid email!");
      return;
    }

    await fetch("/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password_hash: await sha256(password),
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        if (response && response.ok) {
          window.location.href = "/user/me";
        }
      });
  }
</script>

<div class="form-control">
  <h3>Create Account</h3>

  <div class="sign-up-box">
    <input
      class="usernm"
      type="text"
      placeholder="Username"
      bind:value={username}
    />
  </div>

  <div class="sign-up-box">
    <input class="email" type="text" placeholder="E-mail" bind:value={email} />
  </div>

  <div class="sign-up-box">
    <input
      class="pswd"
      type="password"
      placeholder="Password"
      bind:value={password}
    />
  </div>

  <div class="sign-up-box">
    <input
      class="cpswd"
      type="password"
      placeholder="Confirm Password"
      bind:value={passwordCheck}
      on:input={() => alignPassword()}
    />
  </div>
  <div class="sign-up-box">
    <button class="sign-up-button" on:click={() => createAccount()}
      >Sign Up</button
    >
  </div>
</div>

<style>
  .form-control {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  .sign-up-box {
    margin-bottom: 15px;
  }

  .usernm,
  .pswd,
  .cpswd,
  .email {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .sign-up-button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .sign-up-button:hover {
    background-color: #0056b3;
  }
</style>
