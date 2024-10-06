<script lang="ts">
  import type { IUnitMinimal } from "$lib/types/topic.type";
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";
  import { onMount } from "svelte";

  let data: IUnitMinimal[];

  onMount(() => {
    const dynamicDataDiv = document.getElementById("dynamic-data");
    if (dynamicDataDiv) {
      const dataMessage = dynamicDataDiv.getAttribute("data");
      if (!dataMessage) {
        return;
      }

      let rdw: ResponseDataWrapper<IUnitMinimal[]> = JSON.parse(dataMessage);
      if (!rdw.ok || rdw.data === null) {
        console.error(rdw.msg);
        return;
      }

      data = rdw.data;
    }
  });
</script>

{#if data}
  {#each data as unit}
    <h1>{unit.title}</h1>
    <p>{unit.description}</p>
    {#each unit.lessons !== undefined ? unit.lessons : [] as lesson}
      <h2>{lesson.title}</h2>
      <p>{lesson.description}</p>
    {/each}
  {/each}
{/if}
