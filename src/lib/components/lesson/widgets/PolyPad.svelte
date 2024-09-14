<script lang="ts">
  import { WidgetType, type WPolyPad } from "$lib/types/widgets.type";

  export let widget: WPolyPad;

  let width: number =
    widget.width !== undefined && widget.width > 0 ? widget.width : 750;
  let height: number =
    widget.height !== undefined && widget.height > 0 ? widget.height : 500;
</script>

<div>
  <iframe
    title="PolyPad"
    {width}
    {height}
    src="https://polypad.amplify.com/embed/{widget.embedLink}"
    frameborder="0"
  ></iframe>
</div>