<script lang="ts">
  import Login from "./LoginContainer.svelte";
  import BlockedPage from "./BlockedPage.svelte";
</script>

<!-- Implement Blocked condition -->
{#if false}
  <BlockedPage />
{:else}
  <Login />
{/if}
