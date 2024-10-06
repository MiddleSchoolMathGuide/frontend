<script lang="ts">
  import type { WParagraph } from "$lib/types/widgets.type";
  import { Carta, MarkdownEditor } from "carta-md";
  import { math } from "@cartamd/plugin-math";
  import DOMPurify from "isomorphic-dompurify";
  import "carta-md/default.css";
  import "katex/dist/katex.css";

  export let widget: WParagraph;

  const carta = new Carta({
    extensions: [math()],
    sanitizer: DOMPurify.sanitize,
  });

  let value: string = widget.data;
  $: {
    widget.data = value;
  }
</script>

<div class="widget-edit-form">
  <MarkdownEditor {carta} bind:value />
</div>

<style>
  :global(.carta-font-code) {
    font-family: monospace;
    color: black;
    font-size: 1.1rem;
  }

  .widget-edit-form {
    height: 200px;
    max-height: 200px;
    margin: 20px;
    padding: 5px;
    overflow: scroll;
  }
</style>
