<script lang="ts">
  export let contents: string[] = [""];

  const intToSpacing = (int: number): string => {
    let spacing: string = "";
    for (let index = 0; index < int; index++) {
      spacing += "  ";
    }
    return spacing;
  };
</script>

<div class="table-container">
  <div class="header">
    <h6 class="header-text"><strong>Table of Contents</strong></h6>
  </div>
  <div class="contents">
    <!-- Placeholder for now, format string[] later -->
    <p class="option-text">{contents}</p>
  </div>
</div>

<style>
  .table-container {
    padding: 10px;
    flex-direction: column;
  }

  .header {
    margin-bottom: 15px;
    padding: 10px;
  }

  .header-text,
  .option-text {
    color: #515151;
  }

  .contents {
    padding: 10px;
  }
</style>
