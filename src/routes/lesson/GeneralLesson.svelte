<script lang="ts">
  import Credits from "$lib/components/lesson/Credits.svelte";
  import LessonBar from "$lib/components/lesson/LessonBar.svelte";
  import ProgressBar from "$lib/components/lesson/ProgressBar.svelte";
  import TableOfContents from "$lib/components/lesson/TableOfContents.svelte";
  import type { ILesson } from "$lib/types/topic.type";
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";
  import { WidgetType, type WidgetUnion } from "$lib/types/widgets.type";
  import Loading from "$lib/components/lesson/Loading.svelte";
  import { onMount } from "svelte";

  export let names: {
    problemNames: string[];
    contentNames: string[];
    artNames: string[];
    programmingNames: string[];
  } = {
    problemNames: [""],
    contentNames: [""],
    artNames: [""],
    programmingNames: [""],
  };

  export let contents: string[] = [""];

  export let path: {
    lessonName: string;
    topic: string;
    unit: string;
  } = {
    lessonName: "",
    topic: "",
    unit: "",
  };

  let isResponse: boolean = true;

  let { lessonName, topic, unit } = path;

  let docHeight: number = 0;

  onMount(() => {
    docHeight = document.documentElement.scrollHeight;
    //Change if onMount will not work
    fetchLessonContent();
  });

  const fetchLessonContent = async () => {
    try {
      const response = await fetch(`/api/t/${topic}/${unit}/${lessonName}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(
          `Error fetching lesson content: ${response.statusText}`
        );
      }

      const data: ResponseDataWrapper<ILesson> = await response.json();
      const lesson = data.data;

      contents = lesson.widgets.map((widget) => {
        if (
          widget.type === WidgetType.Header ||
          widget.type === WidgetType.SubHeader
        ) {
          return (widget as { text: string }).text;
        }
        //Fallback for other widget type
        return "";
        //Empty space filter
      }).filter(text => text !== "");

      names = {
        problemNames: [],
        contentNames: [lesson.credits.content],
        artNames: [lesson.credits.art],
        programmingNames: [],
      };
    } catch (error) {
      console.error("Failed to fetch lesson content:", error);
    } finally {
      isResponse = false;
    }
  };
</script>

{#if isResponse}
  <Loading />
{:else}
  <div class="lesson-container">
    <div class="left-materials">
      <LessonBar />
    </div>
    <!-- Central Div for Widgets -->
    <div class="central-widgets"></div>

    <div class="right-materials">
      <div class="credits">
        <Credits {names} />
      </div>
      <div class="table-of-contents">
        <TableOfContents {contents} />
      </div>
      <div class="progress-bar">
        <ProgressBar {docHeight} />
      </div>
    </div>
  </div>
{/if}

<style>
  .lesson-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
  }

  .left-materials {
    flex: 1;
    padding: 10px;
    background-color: #f9f9f9;
    border-right: 1px solid #ddd;
  }

  .central-widgets {
    flex: 2;
    padding: 10px;
    background-color: #fff;
  }

  .right-materials {
    flex: 1;
    max-width: 25%;
    padding: 11px;
    background-color: #f9f9f9;
  }

  .credits {
    height: 150px;
  }

  .table-of-contents {
    height: 200px;
  }

  .credits,
  .table-of-contents,
  .progress-bar {
    margin-bottom: 20px;
  }
</style>
