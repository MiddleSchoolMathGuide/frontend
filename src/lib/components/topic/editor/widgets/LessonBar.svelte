<script lang="ts">
  import type {
    WLessonBar,
    WHeader,
    WSubHeader,
    WButton,
  } from "$lib/types/widgets.type";
  export let widget: WLessonBar;

  const { header, unitHeader, stateButtons, activeIndex } = widget;
</script>

<div class="lesson-bar-container">
  <div class="lesson-bar">
    <h1>{header.text}</h1>
    <h2><strong>{unitHeader.text}</strong></h2>

    <div class="state-buttons">
      {#each stateButtons as button, index}
        <div
          class="state-button"
          style="border-color: {button.borderColor}; 
                    width: calc(80% / {stateButtons.length}); 
                    background-color: {index === activeIndex
            ? '#ffcccc'
            : 'transparent'}; 
                    color: {index === activeIndex ? 'red' : 'inherit'};"
        >
          {button.text}
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
