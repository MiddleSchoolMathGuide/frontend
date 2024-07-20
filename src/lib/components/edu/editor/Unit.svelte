<script lang="ts">
  import { Status, type IUnit } from "$lib/types/edu.type";
  import Lesson from "./Lesson.svelte";

  export let unit: IUnit;
  let expanded = false;

  function toggleExpand() {
    expanded = !expanded;
  }

  function addLesson() {
    if (unit.lessons === undefined) {
      unit.lessons = [];
    }

    unit.lessons = [
      ...unit.lessons,
      {
        title: "Untitled lesson",
        description: "Please fill out needed required fields!",
        icon: "",
        widgets: [],
        status: Status.Default,
      },
    ];
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
    <form class="unit-form">
      <label for="title">Title</label>
      <input id="title" bind:value={unit.title} placeholder="Title" required />

      <label for="desc">Description</label>
      <input
        id="desc"
        bind:value={unit.description}
        placeholder="Description"
      />

      <label for="icon">Icon URL</label>
      <input id="icon" bind:value={unit.icon} placeholder="Icon URL" />

      <label for="status">Status</label>
      <input
        id="status"
        bind:value={unit.status}
        placeholder="Status"
        required
      />
    </form>

    <button on:click={() => addLesson()}>Add new lesson</button>
    {#each unit.lessons as lesson}
      <Lesson {lesson} />
    {/each}
  {/if}
</div>

<style>
  .unit-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .unit-form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }

  input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  input:focus {
    border-color: #007bff;
    outline: none;
  }
</style>
