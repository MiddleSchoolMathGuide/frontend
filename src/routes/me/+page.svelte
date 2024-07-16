<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let loggedIn = writable();
  export let user = 'User';

  onMount(async () => {
      const response = await fetch('/auth/is_logged_in');
      if (response.ok) {
        const data = await response.json();
        loggedIn = data.set(data);
      } else {
        console.error('Failed login check: ' + response.statusText);
      }
  });
</script>

<h1>Hello {user}!</h1>