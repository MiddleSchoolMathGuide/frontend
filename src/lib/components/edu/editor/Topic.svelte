<script lang="ts">
  import type { ITopic } from "$lib/types/edu.type";
  import Unit from "./Unit.svelte";

  export let topic: ITopic;
</script>

{#each topic.units as unit}
  <Unit {unit} />
{/each}

<form>
  <input id="title" bind:innerText={topic.title} contenteditable="true" />
  <input id="desc" bind:innerText={topic.description} contenteditable="true" />
  <input id="icon" bind:innerText={topic.icon} contenteditable="true" />
  <input id="status" bind:innerText={topic.status} contenteditable="true" />
</form>
