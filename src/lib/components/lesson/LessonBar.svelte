<script lang="ts">
  import type { LessonButton } from "$lib/types/lesson.type";

  let activeIndex = 0;

  export let topic_header: string = "";
  export let unit_header: string = "";
  export let lessons: LessonButton[] = [
    { title: "", link: new URL("about:blank") },
  ];
</script>

<div class="lesson-bar-container">
  <div class="lesson-bar">
    <h1>{topic_header}</h1>
    <h2><strong>{unit_header}</strong></h2>

    <div class="state-buttons">
      {#each lessons as button, index}
        <div
          class="state-button"
          style="border-color: red; 
                    width: 100%; 
                    background-color: {index === activeIndex
            ? '#ffcccc'
            : 'transparent'}; 
                    color: {index === activeIndex ? 'red' : 'inherit'};"
        >
          {button.title}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .lesson-bar-container {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }

  .lesson-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: left;
    margin-bottom: 10px;
  }

  h2 {
    font-weight: bold;
  }

  .state-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
  }

  .state-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    width: 80%;
    margin: 5px 0;
  }
</style>
