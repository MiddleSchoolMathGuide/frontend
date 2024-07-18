<script lang="ts">
  import Topic from "$lib/components/edu/editor/Topic.svelte";
  import { Status, type ITopic } from "$lib/types/edu.type";
  import { onMount } from "svelte";

  let topic: ITopic = {
    description: "",
    icon: "",
    status: Status.Default,
    title: "",
    units: [],
  };

  onMount(() => {
    const dynamicDataDiv = document.getElementById("dynamic-data");
    if (dynamicDataDiv) {
      const dataMessage = dynamicDataDiv.getAttribute("data");
      if (dataMessage) {
        /* TODO: Handle parsing error */
        topic = JSON.parse(dataMessage);
      }
    }
  });
</script>

<Topic {topic} />
