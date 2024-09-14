<script lang="ts">
  import type { WDesmos } from "$lib/types/widgets.type";
  import { onMount } from "svelte";
  import { v4 as uuidv4 } from "uuid";

  export let widget: WDesmos;

  /* Debug API key */
  const apiKey = "dcb31709b452b1cf9dc26972add0fda6";
  let graphDivId = uuidv4();
  let graphWidth = 500;
  let graphHeight = 400;

  onMount(() => {
    let script = document.createElement("script");
    script.src =
      "https://www.desmos.com/api/v1.3/calculator.js?apiKey=" + apiKey;
    document.head.append(script);

    script.onload = function () {
      let elt = document.getElementById(graphDivId);

      /** @ts-ignore */
      let calculator = Desmos.GraphingCalculator(elt, {
        expressions: true,
        expressionsCollapsed: true,
      });
      calculator.setExpression({ id: "graph1", latex: widget.inputFunction });
    };
  });
</script>

<div>
  <div
    id={graphDivId}
    style="width: {graphWidth}px; height: {graphHeight}px;"
  ></div>
</div>
