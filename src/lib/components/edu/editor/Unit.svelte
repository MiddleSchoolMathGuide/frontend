<script lang="ts">
  import type { IUnit } from "$lib/types/edu.type";
  import Lesson from "./Lesson.svelte";

  export let unit: IUnit;
  let expanded = false;

  function toggleExpand() {
    expanded = !expanded;
  }
</script>

{#each unit.lessons ?? [] as lesson}
  <Lesson {lesson} />
{/each}

<div class="unit-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="unit-header" on:click={toggleExpand}>
    <h3>{unit.title}</h3>
    <p>{unit.description}</p>
  </div>
  {#if expanded}
    <div class="unit-details">
      <p>Status: {unit.status}</p>
      {#each unit.lessons ?? [] as lesson}
        <Lesson {lesson} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .unit-container {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #fff;
  }

  .unit-header {
    cursor: pointer;
  }

  .unit-header:hover {
    background-color: #f0f0f0;
  }

  .unit-details {
    margin-top: 10px;
  }

  .lesson {
    margin-left: 20px;
    margin-top: 5px;
  }
</style>
