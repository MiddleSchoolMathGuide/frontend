<script lang="ts">
  import Credits from "$lib/components/lesson/Credits.svelte";
  import LessonBar from "$lib/components/lesson/LessonBar.svelte";
  import ProgressBar from "$lib/components/lesson/ProgressBar.svelte";
  import TableOfContents from "$lib/components/lesson/TableOfContents.svelte";
  import { onMount } from "svelte";

  export let names: {
    problemNames: string[];
    contentNames: string[];
    artNames: string[];
    programmingNames: string[];
  } = {
    problemNames: [""],
    contentNames: [""],
    artNames: [""],
    programmingNames: [""],
  };

  export let contents: string[] = [""];

  let docHeight: number = 0;

  onMount(() => {
    docHeight = document.documentElement.scrollHeight;
  });
</script>

<div class="lesson-container">
  <div class="left-materials">
    <LessonBar />
  </div>
  <!-- Central Div for Widgets -->
  <div class="central-widgets"></div>

  <div class="right-materials">
    <div class="credits">
      <Credits {names} />
    </div>
    <div class="table-of-contents">
      <TableOfContents {contents} />
    </div>
    <div class="progress-bar">
      <ProgressBar docHeight={docHeight} />
    </div>
  </div>
</div>

<style>
  .lesson-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
  }

  .left-materials {
    flex: 1;
    padding: 10px;
    background-color: #f9f9f9;
    border-right: 1px solid #ddd;
  }

  .central-widgets {
    flex: 2;
    padding: 10px;
    background-color: #fff;
  }

  .right-materials {
    flex: 1;
    max-width: 25%;
    padding: 11px;
    background-color: #f9f9f9;
  }

  .credits {
    height: 150px;
  }

  .table-of-contents {
    height: 200px;
  }

  .credits,
  .table-of-contents,
  .progress-bar {
    margin-bottom: 20px;
  }
</style>
