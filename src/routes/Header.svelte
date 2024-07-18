<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  export let user: string = "";
  let options: string[] = ["", "about", "login"];
  let activePage: string = "";

  const navigateTo = (url: string) => {
    goto(url);
  };

  const updateActivePage = () => {
    activePage = window.location.pathname.substring(1) || "";
  };

  onMount(() => {
    updateActivePage();
    window.addEventListener("popstate", updateActivePage);
  });
</script>

<header>
  <div class="logo">
    <a class="image-link" href="/">Your Logo</a>
  </div>
  <div class="nav-section">
    <nav>
      <ul>
        {#each options as option}
          <li>
            <a
              href="/{option}"
              class:active={activePage === option}
              on:click|preventDefault={() => navigateTo(option)}
            >
              {#if option.length === 0}HOME{/if}
              {option.toUpperCase()}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="selector-bar" />
  </div>
  <div class="user-info">
    {#if user.length !== 0}
      <p class="username">Signed in as {user}</p>
    {:else}
      <p class="username">Not signed in</p>
    {/if}
  </div>
</header>

<style>
  header {
    background-color: #333;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: #fff;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  nav ul li {
    margin-right: 1rem;
  }

  nav ul li a,
  .username,
  .image-link {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    position: relative;
  }

  nav ul li a:hover::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background-color: #ccc;
  }

  /* No idea why this is still necessary but deleting it and the div half breaks the header*/
  .selector-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #ccc;
    transition: width 0.3s ease;
    width: 0;
  }
</style>
