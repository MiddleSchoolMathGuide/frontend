<script lang="ts">
  import type { WTableContents, WButton } from "$lib/types/widgets.type";
  export let widget: WTableContents;

  const { options } = widget;

  const intToSpacing = (int: number): string => {
    let spacing: string = "";
    for (let index = 0; index < int; index++) {
      spacing += "  ";
    }
    return spacing;
  };
</script>

<div class="table-container">
  <div class="header">
    <h6 class="header-text"><strong>Table of Contents</strong></h6>
  </div>
  {#each options as button}
    <div class="contents">
      <p class="option-text">{intToSpacing(button.indentation)}{button.text}</p>
    </div>
  {/each}
</div>

<style>
  .table-container {
    padding: 10px;
    flex-direction: column;
  }

  .header {
    margin-bottom: 15px;
    padding: 10px;
  }

  .header-text,
  .option-text {
    color: #515151;
  }

  .contents {
    padding: 10px;
  }
</style>
