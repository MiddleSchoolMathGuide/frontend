<script lang="ts">
  import type { WHeader } from "$lib/types/widgets.type";

  export let widget: WHeader;
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
