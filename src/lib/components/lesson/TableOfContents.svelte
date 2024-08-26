<script lang="ts">
  import { type WidgetUnion, HeaderTypes } from "$lib/types/widgets.type";

  export let widgets: WidgetUnion[] = [];
</script>

<div class="table-container">
  <div class="toc-header">
    <h6 class="toc-header-text"><strong>Table of Contents</strong></h6>
  </div>
  <div class="contents">
    {#each widgets.filter((o) => HeaderTypes.includes(o.type)) as widget}
      <p class="option-text {widget.type.toLowerCase()}">{widget.text}</p>
    {/each}
  </div>
</div>

<style>
  .table-container {
    padding: 10px;
    flex-direction: column;
  }

  .toc-header {
    margin-bottom: 5px;
    padding: 10px;
  }

  .toc-header-text {
    color: #515151;
  }

  .option-text {
    color: #515151;
    white-space: pre;
    padding: 1px;
    margin: 0px;
  }

  .header {
    font-size: 11px;
    margin-left: 10px;
  }

  .subheader {
    font-size: 8px;
    margin-left: 25px;
  }

  .contents {
    padding: 10px;
  }
</style>
