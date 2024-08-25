<script lang="ts">
  import type { WidgetUnion } from "$lib/types/widgets.type";

  export let widgets: WidgetUnion[] = [];
</script>

<div class="table-container">
  <div class="header">
    <h6 class="header-text"><strong>Table of Contents</strong></h6>
  </div>
  <div class="contents">
    <!-- Placeholder for now, format string[] later -->
    <p class="option-text">{widgets}</p>
  </div>
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
