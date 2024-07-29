<script lang="ts">
  import type { WCredits, WButton } from "$lib/types/widgets.type";
  export let widget: WCredits;

  const { problemNames, contentNames, artNames, programmingNames } = widget;

  const formatNames = (names: string[]): string => {
    let nameList: string = "";
    for (let i = 0; i < names.length, i++; ) {
      nameList += names[i] + ", ";
    }
    return nameList;
  };
</script>

<div class="credit-container">
  <div class="header">
    <h6 class="header-text"><strong>Credits</strong></h6>
  </div>
  <div class="names">
    <div>
      <p class="credit-text">{formatNames(problemNames)}</p>
    </div>
    <div>
      <p class="credit-text">{formatNames(contentNames)}</p>
    </div>
    <div>
      <p class="credit-text">{formatNames(artNames)}</p>
    </div>
    <div>
      <p class="credit-text">{formatNames(programmingNames)}</p>
    </div>
  </div>
</div>

<style>
  .credit-container {
    padding: 10px;
    flex-direction: column;
  }

  .header {
    margin-bottom: 15px;
    padding: 10px;
  }

  .header-text,
  .credit-text {
    color: #515151;
  }

  .names {
    padding: 10px;
  }
</style>
