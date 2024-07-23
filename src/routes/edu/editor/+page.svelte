<script lang="ts">
  import Topic from "$lib/components/topic/editor/Topic.svelte";
  import { Status, type ITopic } from "$lib/types/topic.type";
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";
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
      if (!dataMessage) {
        return;
      }

      /* TODO: Handle parsing error */
      let rdw: ResponseDataWrapper<ITopic> = JSON.parse(dataMessage);
      if (!rdw.ok || rdw.data === null) {
        console.error(rdw.msg);
        return;
      }

      topic = rdw.data;
    }
  });
</script>

<Topic {topic} />
