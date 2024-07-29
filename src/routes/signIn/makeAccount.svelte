<script lang="ts">
  import UserData from "$lib/components/user/UserData.svelte";
  import { goto } from '$app/navigation';
  import type { UserAPIResponse } from "$lib/types/profile.type";
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";

  let username: string = "";
  let password: string = "";
  let email: string = "";
  let name: string = "";
  let passwordCheck: string = "";
  let errorMessage: string = "";
  let successMessage: string = "";
  let canLogin: boolean = false;

  //For now, verifying that the email is a gmail, to be expanded in the future with actual verification if necessary
  const isGmail = (email: string): boolean => {
    const gmailPattern = /^[a-zA-z0-9.+%+-]+@gmail\.com$/;
    return gmailPattern.test(email);
  }

  const alignPassword = () => {
    canLogin = password === passwordCheck;
  };

  const createAccount = async () => {
    if (!canLogin) {
      errorMessage = "Password inputs do not match.";
      return;
    }

    if (!isGmail(email)) {
      errorMessage = "Please use a Gmail address.";
      return;
    }

    try {
      const response = await fetch('/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          name,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        successMessage = "Account created successfully. Redirecting...";
        setTimeout(() => {
          goto('/login');
        }, 2000);
      } else {
        errorMessage = result.message || 'An error occurred. Please try again.';
      }
    } catch (error) {
      errorMessage = 'Network error. Please try again later.';
    }
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

    <div class="sign-in-box">
      <input
        class="usernm"
        type="text"
        placeholder="Username"
        bind:value={username}
      />
    </div>

    <div class="sign-in-box">
      <input class="name" type="text" placeholder="Name" bind:value={name} />
    </div>

    <div class="sign-in-box">
      <input
        class="email"
        type="text"
        placeholder="E-mail"
        bind:value={email}
      />
    </div>

    <div class="sign-in-box">
      <input
        class="pswd"
        type="password"
        placeholder="Password"
        bind:value={password}
      />
    </div>

    <div class="sign-in-box">
      <input
        class="cpswd"
        type="password"
        placeholder="Confirm Password"
        bind:value={passwordCheck}
        on:input={() => alignPassword()}
      />
    </div>
    <div class="sign-in-box">
      <button class="sign-in-button" on:click={() => createAccount()}
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

  .sign-in-box {
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

  .sign-in-button {
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

  .sign-in-button:hover {
    background-color: #0056b3;
  }
</style>
