<script lang="ts">
  import UserData from "$lib/components/user/UserData.svelte";
  import type { UserAPIResponse } from "$lib/types/profile.type";
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";

  let username: string = "";
  let password: string = "";
  let email: string = "";
  let name: string = "";
  let passwordCheck: string = "";
  let canLogin: boolean = false;

  const alignPassword = () => {
    canLogin = password === passwordCheck;
  };

  const createAccount = () => {
    if (!canLogin) {
      alert("Password Inputs Do Not Match");
    }
    return canLogin;
  };

  function makeUser(): ResponseDataWrapper<UserAPIResponse> {
    let val: ResponseDataWrapper<UserAPIResponse> = {
      ok: canLogin,
      msg: "user successfully created",
      data: {
        username,
        email,
        privilige_level: "user",
        created_at: new Date(),
        updated_at: new Date(),
        profile: {
          name,
          bio: "Regular User",
        },
      },
    };
    return val;
  }
</script>

{#if !canLogin}
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
      <input class="name" type="text" placeholder="Name" bind:value={name} />
    </div>

    <div class="sign-up-box">
      <input
        class="email"
        type="text"
        placeholder="E-mail"
        bind:value={email}
      />
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
        >Sign In</button
      >
    </div>
  </div>
{:else}
  <UserData data={makeUser()} />
{/if}

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
  .name,
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
