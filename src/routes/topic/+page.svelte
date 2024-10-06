<script lang="ts">
  import type { ITopicMinimal } from "$lib/types/topic.type";
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";
  import { onMount } from "svelte";

  let topics: Array<ITopicMinimal>;

  function navigateToNewTopic() {
    window.location.href = "/topic/editor?topic=new";
  }

  function get_topics() {
    fetch("/api/list")
      .then((data) => data.json())
      .then((topics_: ResponseDataWrapper<Array<ITopicMinimal>>) => {
        if (topics_.ok === false) {
          console.error(`Error during /api/list call: ${topics_.msg}`);
          return;
        }
        topics = topics_.data;
      });
  }

  onMount(() => {
    const button = document.querySelector(".centered-button");
    if (button !== null) button.classList.add("gradient-transition");
    get_topics();
  });
</script>

<div class="container">
  <button on:click={navigateToNewTopic} class="centered-button">
    New Topic
  </button>
</div>

{#if topics}
  {#each topics as topic}
    <h1>{topic.title}</h1>
    <p>{topic.description}</p>
  {/each}
{/if}

<style>
  .container {
    height: 90vh;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .centered-button {
    width: 500px;
    padding: 10px;
    font-size: 24px;
    text-align: center;
    border: none;
    border-radius: 5px;
    background: linear-gradient(45deg, #007bff, #00cfff);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .centered-button:hover {
    background-color: #0056b3;
  }
</style>
