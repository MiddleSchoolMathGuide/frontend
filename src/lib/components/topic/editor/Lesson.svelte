<script lang="ts">
  import { type ILesson } from "$lib/types/topic.type";
  import { WidgetType, type WidgetUnion } from "$lib/types/widgets.type";
  import { dndzone, type DndEvent } from "svelte-dnd-action";
  import Header from "./widgets/EHeader.svelte";
  import SubHeader from "./widgets/ESubHeader.svelte";

  export let lesson: ILesson;
  let expanded = false;

  function toggleExpand() {
    expanded = !expanded;
  }

  /* TODO: Figure out whether we need this or not */
  function handleDndConsider(event: CustomEvent<DndEvent<WidgetUnion>>) {
    const { items } = event.detail;
    lesson.widgets = items;
  }

  function handleDndFinalize(event: CustomEvent<DndEvent<WidgetUnion>>) {
    const { items } = event.detail;
    lesson.widgets = items;
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

      <label for="credit_content">Content credit</label>
      <input
        id="credit_content"
        bind:value={lesson.credits.content}
        placeholder="Content credits"
        required
      />

      <label for="credit_art">Art credit</label>
      <input
        id="credit_art"
        bind:value={lesson.credits.art}
        placeholder="Art credits"
        required
      />

      <label for="numberInput">Select difficulty (0-5):</label>
      <input
        id="numberInput"
        type="number"
        min="0"
        max="5"
        step="1"
        placeholder="0"
        bind:value={lesson.difficulty}
      />
    </form>

    <p class="explain-widgets">Drag and Drop Widgets Below</p>
    <div
      class="widget-container"
      use:dndzone={{
        items: lesson.widgets,
        flipDurationMs: 300,
        type: "widget",
      }}
      on:consider={handleDndConsider}
      on:finalize={handleDndFinalize}
    >
      
      {#each lesson.widgets as widget (widget._id)}
        {#if widget.type === WidgetType.Header}
          <Header {widget} />
        {:else if widget.type === WidgetType.SubHeader}
          <SubHeader {widget} />
        {/if}
      {/each}
    </div>
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

  label,
  .explain-widgets {
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

  .widget-container {
    width: 100%;
    min-height: 40px;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    overflow: auto;
  }
</style>
