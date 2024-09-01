<script lang="ts">
  import type { WDesmos } from "$lib/types/widgets.type";
  import { onMount } from "svelte";

  export let widget: WDesmos;

  let width: number =
    widget.width != undefined && widget.width > 0 ? widget.width : 750;
  let height: number =
    widget.height != undefined && widget.height > 0 ? widget.height : 500;

  //This is one of the few times where Svelte makes anything harder...
  function loadDesmosScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof window !== "undefined" && (window as any).Desmos) {
        resolve((window as any).Desmos);
      } else {
        const script = document.createElement("script");
        script.src =
          "https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";
        script.onload = () => {
          resolve((window as any).Desmos);
        };
        script.onerror = () =>
          reject(new Error("Failed to load Desmos script"));
        document.head.appendChild(script);
      }
    });
  }

  onMount(async () => {
    try {
      const Desmos = await loadDesmosScript();
      let elt = document.getElementById("desmos");
      if (elt && Desmos) {
        let calculator = Desmos.GraphingCalculator(elt);
        calculator.setExpression({
          id: "given",
          latex: widget.inputFunction !== null ? widget.inputFunction : "",
        });
      } else {
        console.error("Desmos API is not available");
      }
    } catch (error) {
      console.error("Error loading Desmos script:", error);
    }
  });
</script>

<div id="desmos" style="width:{width}px heigth:{height}px"></div>
