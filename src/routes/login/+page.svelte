<script lang="ts">
  import { onMount } from 'svelte';
  import Login from "./login.svelte";

  let username:string;
  let password:string;

  const handleLogin = async () => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password_hash: hash(password)
        })
      });
      
      const data = await response.json();
      if (response.ok) {
        // change later if home page changes 
        console.log(response.json);
        () => window.location.href = '/';
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during Login:', error)
    }
  }


  // No Hashing yet, implement
  function hash(password:string):string {
    return password;
  }
</script>

<Login on:click={handleLogin} {username} {password}/>