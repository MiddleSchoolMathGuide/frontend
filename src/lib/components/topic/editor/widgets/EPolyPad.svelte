<script lang="ts">
  import type { WPolyPad } from "$lib/types/widgets.type";

  let allowWidth: boolean = false;
  let allowHeight: boolean = false;

  export let widget: WPolyPad;
</script>

<div class="widget-edit-form">
  <label for="link">Embed ID (the stuff after /embed/ in the link)</label>
  <input
    id="link"
    type="text"
    bind:value={widget.embedLink}
    placeholder="Enter widget text"
  />

  <label for="allowWidth">Width?</label>
  <input id="allowWidth" type="checkbox" bind:checked={allowWidth} />
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
  <input id="allowHeight" type="checkbox" bind:checked={allowHeight} />
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
