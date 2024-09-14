<script lang="ts">
  import type { WDesmos } from "$lib/types/widgets.type";

  let allowWidth:boolean = false;
  let allowHeight:boolean = false;
  let containsExpression:boolean = false;

  export let widget: WDesmos;
</script>

<div class="widget-edit-form">
  <label for="containsExpression">Input a LaTeX Expression for the Embed?</label>
  <input id="contains Expression" type="checkbox" bind:checked={containsExpression}/>
  {#if containsExpression}
    <label for="desmos">Expression</label>
    <input
      id="desmos"
      type="text"
      bind:value={widget.inputFunction}
      placeholder="Enter LaTeX"
    />
  {/if}

  <label for="allowWidth">Width?</label>
  <input id="allowWidth" type="checkbox" bind:checked={allowWidth}/>
  {#if allowWidth}
    <label for="width">Width</label>
    <input
      id="width"
      type="number"
      bind:value={widget.width}
      placeholder="Enter width"
    />
  {/if}

  <label for="allowHeight">Height?</label>
  <input id="allowHeight" type="checkbox" bind:checked={allowHeight}/>
  {#if allowHeight}
    <label for="height">Height</label>
    <input
      id="height"
      type="number"
      bind:value={widget.height}
      placeholder="Enter height"
    />
  {/if}

</div>


