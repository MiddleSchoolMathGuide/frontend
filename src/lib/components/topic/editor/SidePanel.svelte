<script lang="ts">
  import { dndzone, type DndEvent } from "svelte-dnd-action";
  import { type WidgetUnion, WidgetType } from "$lib/types/widgets.type";

  // @ts-ignore
  import { v4 as uuidv4 } from "uuid";

  const allWidgets: WidgetUnion[] = [
    { text: "", type: WidgetType.Header, _id: uuidv4(), new: true },
    { text: "", type: WidgetType.SubHeader, _id: uuidv4(), new: true },
    {
      inputFunction: "",
      type: WidgetType.Desmos,
      _id: uuidv4(),
      new: true,
    },
    {
      embedLink: "",
      type: WidgetType.PolyPad,
      _id: uuidv4(),
      new: true,
    },
    {
      type: WidgetType.Paragraph,
      _id: uuidv4(),
      new: true,
    },
  ];

  let widgets = structuredClone(allWidgets);

  function handleDndConsider(event: CustomEvent<DndEvent<WidgetUnion>>) {
    const { items } = event.detail;
    widgets = items;
  }

  function handleDndFinalize(_: CustomEvent<DndEvent<WidgetUnion>>) {
    widgets = structuredClone(allWidgets);
  }
</script>

<div class="widget-container">
  <div class="side-panel-header">Draggable Widgets</div>

  <div
    class="side-panel"
    use:dndzone={{ items: widgets, flipDurationMs: 300, type: "widget" }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each widgets as widget (widget._id)}
      <div class="widget-item">
        <div>
          {widget.type}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .side-panel {
    width: 200px;
    padding: 20px;
    background-color: #fff;
    border-left: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
  }

  .side-panel-header {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  .widget-item {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: grab;
    transition: background-color 0.3s;
  }

  .widget-item:hover {
    background-color: #f1f1f1;
  }
</style>
