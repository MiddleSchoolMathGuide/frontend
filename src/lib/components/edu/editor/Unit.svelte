<script lang="ts">
  import type { IUnit } from "$lib/types/edu.type";
  import Lesson from "./Lesson.svelte";

  export let unit: IUnit;
</script>

{#each unit.lessons ?? [] as lesson}
  <Lesson {lesson} />
{/each}
