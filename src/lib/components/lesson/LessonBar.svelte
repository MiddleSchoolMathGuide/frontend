<script lang="ts">
  import type { ILesson, ITopic, IUnit } from "$lib/types/topic.type";
  import { normalizeTitle } from "$lib/utils/converter";

  export let topic: ITopic;
  export let unit_arr: IUnit[];
  export let lessons_arr: ILesson[];
</script>

<div class="lesson-bar-container">
  <div class="lesson-bar">
    <h1>{topic ? topic.title : ""}</h1>
    <h2><strong>{topic ? topic.units[0].title : ""}</strong></h2>

    <div class="state-buttons">
      {#each lessons_arr as lesson}
        <a
          href={topic
            ? "/t/" +
              normalizeTitle(topic.title) +
              "/" +
              normalizeTitle(topic.units[0].title) +
              "/" +
              normalizeTitle(lesson.title)
            : ""}
          class="state-button"
          style="border-color: red; 
                    width: 100%; 
                    background-color: {lesson.index ===
          (topic ? topic.units[0].lessons[0].index : 0)
            ? '#ffcccc'
            : 'transparent'}; 
                    color: {lesson.index ===
          (topic ? topic.units[0].lessons[0].index : 0)
            ? 'red'
            : 'inherit'};"
        >
          {lesson.title}
        </a>
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
