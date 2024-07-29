<script lang="ts">
  import {
    Status,
    type ILesson,
    type ITopic,
    type IUnit,
  } from "$lib/types/topic.type";
  import type { WidgetUnion } from "$lib/types/widgets.type";
  import Unit from "./Unit.svelte";
  import {
    dndzone,
    type DndEvent,
    overrideItemIdKeyNameBeforeInitialisingDndZones,
  } from "svelte-dnd-action";
  import { v4 as uuidv4 } from "uuid";

  export let topic: ITopic;
  overrideItemIdKeyNameBeforeInitialisingDndZones("_id");

  export function sendTopic() {
    fetch(window.location.href, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ok: true,
        content: processData(processData(topic, removeId), addIndex),
      }),
    }).then((response) => {
      if (response.ok) {
        /* Force reload to update ID-s */
        /* TODO: NON-IDEAL, IMPLEMENT UPDATE STREAMING */
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("topic", topic.title);

        /* This auto-refreshes */
        window.location.search = searchParams.toString();
      }
    });
  }

  type Processor<T> = (item: T, index: number) => T;

  /* Processor that removes "fake" _id fields */
  const removeId: Processor<IUnit | ILesson | WidgetUnion> = (obj, _) => {
    if (obj.new === true) delete obj._id;
    delete obj.new;
    return obj;
  };

  /* Processor that adds indexes to each array */
  const addIndex: Processor<IUnit | ILesson | WidgetUnion> = (item, index) => ({
    ...item,
    index,
  });

  /* Function to process topic data with a `Processor` */
  const processData = (
    topic: ITopic,
    processor: Processor<IUnit | ILesson | WidgetUnion>
  ): ITopic => ({
    ...topic,
    units: topic.units.map((unit, unitIndex) => ({
      ...(processor(unit, unitIndex) as IUnit),
      lessons:
        unit.lessons?.map((lesson, lessonIndex) => ({
          ...(processor(lesson, lessonIndex) as ILesson),
          widgets:
            lesson.widgets?.map(
              (widget, widgetIndex) =>
                processor(widget, widgetIndex) as WidgetUnion
            ) || [],
        })) || [],
    })),
  });

  function addUnit() {
    if (topic.units === undefined) {
      topic.units = [];
    }

    topic.units = [
      ...topic.units,
      {
        title: "Untitled unit",
        description: "Please fill out needed required fields!",
        icon: "",
        lessons: [],
        status: Status.Default,
        /* Assign "fake" _id */
        _id: uuidv4(),
        new: true,
      },
    ];
  }

  /* TODO: Figure out whether we need this or not */
  function handleDndConsider(event: CustomEvent<DndEvent<IUnit>>) {
    const { items } = event.detail;
    topic.units = items;
  }

  function handleDndFinalize(event: CustomEvent<DndEvent<IUnit>>) {
    const { items } = event.detail;
    topic.units = items;
  }
</script>

<div class="topic-container">
  <form class="topic-form">
    <button on:click={() => sendTopic()} type="submit" class="submit-button">
      Save
    </button>

    <label for="title">Title</label>
    <input id="title" bind:value={topic.title} placeholder="Title" required />

    <label for="desc">Description</label>
    <input id="desc" bind:value={topic.description} placeholder="Description" />

    <label for="icon">Icon URL</label>
    <input id="icon" bind:value={topic.icon} placeholder="Icon URL" />

    <label for="status">Status</label>
    <input
      id="status"
      bind:value={topic.status}
      placeholder="Status"
      required
    />
  </form>

  <button on:click={() => addUnit()}>Add new unit</button>
  <div
    class="units-container"
    use:dndzone={{ items: topic.units, flipDurationMs: 300, type: "topic" }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each topic.units as unit (unit._id)}
      <Unit {unit} />
    {/each}
  </div>
</div>

<style>
  .topic-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .topic-form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }

  input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  input:focus {
    border-color: #007bff;
    outline: none;
  }

  .submit-button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 20px;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }
</style>
