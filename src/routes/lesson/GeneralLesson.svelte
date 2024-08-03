<script lang="ts">
  import Credits from "$lib/components/lesson/Credits.svelte";
  import LessonBar from "$lib/components/lesson/LessonBar.svelte";
  import ProgressBar from "$lib/components/lesson/ProgressBar.svelte";
  import TableOfContents from "$lib/components/lesson/TableOfContents.svelte";
  import { onMount } from "svelte";

  interface LessonContent {
    contents: string[];
  }

  interface Lesson {
    problemName?: string;
    contentName?: string;
    artName?: string;
    programmingName?: string;
  }

  interface UnitContextResponse {
    ok: boolean;
    msg: string;
    data: {
      units: any[];
      lessons: Lesson[];
    };
  }

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
  }

  let {lessonName, topic, unit} = path;

  let docHeight: number = 0;

  onMount(() => {
    docHeight = document.documentElement.scrollHeight;
    //Change if onMount will not work
    fetchLessonContent();
    fetchNames(); 
  });

  const fetchLessonContent = async () => {
    try {
      const response = await fetch(`/api/t/${topic}/${unit}/${lessonName}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error fetching lesson content: ${response.statusText}`);
      }

      const data: LessonContent = await response.json();
      contents = data.contents || [];
    } catch (error) {
      console.error("Failed to fetch lesson content:", error);
    }
  };

  const fetchNames = async () => {
    try {
      const response = await fetch(`/api/unit_context/${topic}/${unit}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error fetching names: ${response.statusText}`);
      }

      const data: UnitContextResponse = await response.json();

      if (data.ok && data.data) {
        const { lessons } = data.data;
        names = {
          problemNames: lessons.map(lesson => lesson.problemName || ""),
          contentNames: lessons.map(lesson => lesson.contentName || ""),
          artNames: lessons.map(lesson => lesson.artName || ""),
          programmingNames: lessons.map(lesson => lesson.programmingName || ""),
        };
      } else {
        console.warn("No data received from the names API.");
      }
    } catch (error) {
      console.error("Failed to fetch names:", error);
    }
  };
</script>

<div class="lesson-container">
  <div class="left-materials">
    <LessonBar />
  </div>
  <!-- Central Div for Widgets -->
  <div class="central-widgets">

  </div>

  <div class="right-materials">
    <div class="credits">
      <Credits {names} />
    </div>
    <div class="table-of-contents">
      <TableOfContents {contents} />
    </div>
    <div class="progress-bar">
      <ProgressBar docHeight={docHeight} />
    </div>
  </div>
</div>

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
