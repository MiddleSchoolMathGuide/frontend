<script lang="ts">
  import type { WSubHeader } from "$lib/types/widgets.type";

  export let widget: WSubHeader;
</script>

<div class="widget-edit-form">
  <label for="text">Text</label>
  <input
    id="text"
    type="text"
    bind:value={widget.text}
    placeholder="Enter widget text"
  />
</div>
