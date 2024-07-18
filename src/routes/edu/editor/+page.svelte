<script lang="ts">
  import Topic from "$lib/components/edu/editor/Topic.svelte";
  import { Status, type ITopic } from "$lib/types/edu.type";
  import { onMount } from "svelte";

  function sendTopic() {
    fetch("/edu/editor", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ok: true,
        content: topic,
      }),
    }).then((response) => {
      /* TODO: Handle exceptions */
    });
  }

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
        topic = JSON.parse(dataMessage).data;
      }
    }
  });
</script>

<button on:click={() => sendTopic()}>Save</button>
<Topic {topic} />
