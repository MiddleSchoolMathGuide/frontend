<script lang="ts">
  import type { WDesmos } from "$lib/types/widgets.type";

  let containsExpression: boolean = false;

  export let widget: WDesmos;
</script>

<div class="widget-edit-form">
  <label for="containsExpression">Input a LaTeX Expression for the Embed?</label
  >
  <input
    id="contains Expression"
    type="checkbox"
    bind:checked={containsExpression}
  />
  {#if containsExpression}
    <label for="desmos">Expression</label>
    <input
      id="desmos"
      type="text"
      bind:value={widget.inputFunction}
      placeholder="Enter LaTeX"
    />
  {/if}
</div>
