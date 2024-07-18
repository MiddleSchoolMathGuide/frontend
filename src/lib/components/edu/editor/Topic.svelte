<script lang="ts">
  import type { ITopic } from "$lib/types/edu.type";
  import Unit from "./Unit.svelte";

  export let topic: ITopic;
</script>

<div class="topic-container">
  {#each topic.units as unit}
    <Unit {unit} />
  {/each}

  <form class="topic-form">
    <label for="title">Title</label>
    <input id="title" bind:value={topic.title} placeholder="Title" required />

    <label for="desc">Description</label>
    <input
      id="desc"
      bind:value={topic.description}
      placeholder="Description"
      required
    />

    <label for="icon">Icon URL</label>
    <input id="icon" bind:value={topic.icon} placeholder="Icon URL" required />

    <label for="status">Status</label>
    <input
      id="status"
      bind:value={topic.status}
      placeholder="Status"
      required
    />

    <button type="submit" class="submit-button">Save</button>
  </form>
</div>

<style>
  .topic-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .topic-form {
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

  .submit-button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }
</style>
