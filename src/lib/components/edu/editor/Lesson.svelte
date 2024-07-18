<script lang="ts">
  import type { ILesson } from "$lib/types/edu.type";
  import { WidgetType } from "$lib/types/widgets.type";
  import Header from "./widgets/Header.svelte";
  import SubHeader from "./widgets/SubHeader.svelte";

  export let lesson: ILesson;
</script>

{#each lesson.widgets ?? [] as widget}
  {#if widget.type === WidgetType.Header}
    <Header {widget} />
  {:else if widget.type === WidgetType.SubHeader}
    <SubHeader {widget} />
  {/if}
{/each}
