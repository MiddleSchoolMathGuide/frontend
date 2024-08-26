<script lang="ts">
  import Credits from "$lib/components/lesson/Credits.svelte";
  import Difficulty from "$lib/components/lesson/Difficulty.svelte";
  import LessonBar from "$lib/components/lesson/LessonBar.svelte";
  import Loading from "$lib/components/lesson/Loading.svelte";
  import ProgressBar from "$lib/components/lesson/ProgressBar.svelte";
  import TableOfContents from "$lib/components/lesson/TableOfContents.svelte";
  import Header from "$lib/components/lesson/widgets/Header.svelte";
  import SubHeader from "$lib/components/lesson/widgets/SubHeader.svelte";
  import type { ILesson, ITopic, IUnit } from "$lib/types/topic.type";
  import { WidgetType } from "$lib/types/widgets.type";
  import type { ResponseDataWrapper } from "$lib/types/wrapper.type";
  import { onMount } from "svelte";

  let names: {
    problemNames: string[];
    contentNames: string[];
    artNames: string[];
    programmingNames: string[];
  };

  let units: Array<IUnit> = [];
  let lessons: Array<ILesson> = [];
  let topic: ITopic;
  let lesson: ILesson;

  let loaded: boolean = false;

  onMount(() => {
    let pathparts = window.location.pathname.slice(3).split("/");
    const topic_title = pathparts[0];
    const unit_title = pathparts[1];
    const lesson_title = pathparts[2];

    /* Fetch units */
    const units_promise = fetch(`/api/list/${topic_title}`)
      .then((data) => data.json())
      .then((respone: ResponseDataWrapper<Array<IUnit>>) => {
        if (!respone.ok) {
          /* TODO: Error handling */
          console.error("Error while loading units list");
          return;
        }

        units = respone.data;
      });

    /* Fetch lessons */
    const lessons_promise = fetch(`/api/list/${topic_title}/${unit_title}`)
      .then((data) => data.json())
      .then((respone: ResponseDataWrapper<Array<ILesson>>) => {
        if (!respone.ok) {
          /* TODO: Error handling */
          console.error("Error while loading lessons list");
          return;
        }

        lessons = respone.data;
      });

    /* Fetch whole lesson */
    const lesson_promise = fetch(
      `/api/t/${topic_title}/${unit_title}/${lesson_title}`
    )
      .then((data) => data.json())
      .then((respone: ResponseDataWrapper<ITopic>) => {
        if (!respone.ok) {
          /* TODO: Error handling */
          console.error("Error while loading lesson");
          return;
        }

        topic = respone.data;
        lesson = topic.units[0].lessons[0];
      });

    Promise.all([units_promise, lessons_promise, lesson_promise]).then(() => {
      loaded = true;
    });
  });
</script>

{#if loaded}
  <div class="lesson-container">
    <div class="left-materials">
      <LessonBar {topic} unit_arr={units} lessons_arr={lessons} />
    </div>
    <!-- Central Div for Widgets -->
    <div class="central-widgets">
      <Difficulty level={topic ? topic.units[0].lessons[0].difficulty : 0} />
      {#each lesson.widgets as widget (widget._id)}
        {#if widget.type === WidgetType.Header}
          <Header {widget} />
        {:else if widget.type === WidgetType.SubHeader}
          <SubHeader {widget} />
        {/if}
      {/each}
    </div>
    <div class="right-materials">
      <div class="credits">
        <Credits {names} />
      </div>
      <div class="table-of-contents">
        <TableOfContents widgets={lesson.widgets} />
      </div>
      <div class="progress-bar">
        <ProgressBar />
      </div>
    </div>
  </div>
{:else}
  <!-- Spinner -->
  <Loading />
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
