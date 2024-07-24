<script lang="ts">
  import type { WButton } from "$lib/types/widgets.type";

  export let widget: WButton;

  const addTabs = () => {
    let tabs:string = '';
    for(let i = widget.indentation; i > 0; i++) {
      tabs += ' ';
    }
    return tabs;
  }
</script>

<button style="border: {widget.borderColor}; color: #515151;">{addTabs()}{widget.text}</button>
