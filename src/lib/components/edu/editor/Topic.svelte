<script lang="ts">
  import type { ITopic } from "$lib/types/edu.type";
  import Unit from "./Unit.svelte";

  export let topic: ITopic;
</script>

{#each topic.units as unit}
  <Unit {unit} />
{/each}

<form>
  <input
    id="title"
    bind:value={topic.title}
    contenteditable="true"
    placeholder="Title"
  />
  <input
    id="desc"
    bind:value={topic.description}
    contenteditable="true"
    placeholder="Description"
  />
  <input
    id="icon"
    bind:value={topic.icon}
    contenteditable="true"
    placeholder="Icon URL"
  />
  <input
    id="status"
    bind:value={topic.status}
    contenteditable="true"
    placeholder="Status"
  />
</form>
