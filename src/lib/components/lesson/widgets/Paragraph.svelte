<script lang="ts">
  import type { WParagraph } from "$lib/types/widgets.type";
  import { Carta, Markdown } from "carta-md";
  import { math } from "@cartamd/plugin-math";
  import DOMPurify from "isomorphic-dompurify";
  import "carta-md/default.css";
  import "katex/dist/katex.css";

  export let widget: WParagraph;
  let value = widget.data;

  const carta = new Carta({
    extensions: [math()],
    sanitizer: DOMPurify.sanitize,
  });
</script>

<Markdown {carta} {value} />
