<script lang="ts">
  import SidePanel from "$lib/components/topic/editor/SidePanel.svelte";
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

      let rdw: ResponseDataWrapper<ITopic> = JSON.parse(dataMessage);
      if (!rdw.ok || rdw.data === null) {
        console.error(rdw.msg);
        return;
      }

      topic = rdw.data;
    }
  });
</script>

<div class="main-container">
  <div class="content">
    <Topic {topic} />
  </div>
  <SidePanel />
</div>

<style>
  .main-container {
    display: flex;
    align-items: flex-start;
    padding: 20px;
    background-color: #f9f9f9;
  }

  .content {
    flex: 1;
    padding-right: 20px;
  }
</style>
