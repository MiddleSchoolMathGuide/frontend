<script lang="ts">
  import type { WDesmos } from "$lib/types/widgets.type";
  import { onMount } from "svelte";

  export let widget: WDesmos;

  let width: number =
    widget.width != undefined && widget.width > 0 ? widget.width : 750;
  let height: number =
    widget.height != undefined && widget.height > 0 ? widget.height : 500;

  onMount(() => {
    let desmosScript = document.createElement("script");
    desmosScript.src =
      "https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";

    desmosScript.onload = () => {
      if (window.Desmos) {
        const elt = document.getElementById("desmos");
        if (elt) {
          const calculator = window.Desmos.GraphingCalculator(elt, {
            expressions: true,
          });

          if (widget.inputFunction) {
            calculator.setExpression({
              id: "givenLine",
              latex: widget.inputFunction,
            });
          }
        }
      } else {
        console.error("Desmos library is not loaded.");
      }
    };
    document.head.appendChild(desmosScript);
  });
</script>

<div id="desmos" style="width:{width}px; height:{height}px;"></div>
