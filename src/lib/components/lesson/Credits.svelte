<script lang="ts">
  export let names: {
    problemNames: string[];
    contentNames: string[];
    artNames: string[];
    programmingNames: string[];
  } = {
    problemNames: [""],
    contentNames: [""],
    artNames: [""],
    programmingNames: ["Lucas Hufnagel", "Mark Devenyi"],
  };

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
      <p class="credit-text">{formatNames(names.problemNames)}</p>
    </div>
    <div>
      <p class="credit-text">{formatNames(names.contentNames)}</p>
    </div>
    <div>
      <p class="credit-text">{formatNames(names.artNames)}</p>
    </div>
    <div>
      <p class="credit-text">{formatNames(names.programmingNames)}</p>
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
