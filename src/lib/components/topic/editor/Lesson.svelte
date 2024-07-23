<script lang="ts">
  import { type ILesson } from "$lib/types/topic.type";
  import { WidgetType } from "$lib/types/widgets.type";
  import SubHeader from "./widgets/SubHeader.svelte";
  import Header from "./widgets/Header.svelte";

  export let lesson: ILesson;
  let expanded = false;

  function toggleExpand() {
    expanded = !expanded;
  }
</script>

<div class="lesson-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="lesson-header" on:click={toggleExpand}>
    <h3>{lesson.title}</h3>
    <p>{lesson.description}</p>
  </div>

  {#if expanded}
    <form class="lesson-form">
      <label for="title">Title</label>
      <input
        id="title"
        bind:value={lesson.title}
        placeholder="Title"
        required
      />

      <label for="desc">Description</label>
      <input
        id="desc"
        bind:value={lesson.description}
        placeholder="Description"
      />

      <label for="icon">Icon URL</label>
      <input id="icon" bind:value={lesson.icon} placeholder="Icon URL" />

      <label for="status">Status</label>
      <input
        id="status"
        bind:value={lesson.status}
        placeholder="Status"
        required
      />
    </form>

    {#each lesson.widgets as widget}
      {#if widget.type === WidgetType.Header}
        <Header {widget} />
      {:else if widget.type === WidgetType.SubHeader}
        <SubHeader {widget} />
      {/if}
    {/each}
  {/if}
</div>

<style>
  .lesson-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .lesson-form {
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
