<script lang="ts">
  export let flavorText: string = "Easy";
  export let level: number = 0;

  //Colors correspond to level
  const difficulties: string[] = [
    "#2ae509",
    "#e5db09",
    "#e58409",
    "#e53609",
    "#e50909",
  ];

  const retrieveColor = (index: number): string => {
    return index < level ? difficulties[level - 1] : "#D9D9D9";
  };
</script>

<div class="difficulty-container">
  <div
    class="difficulty-tile"
    style="background-color: {retrieveColor(0)}"
  ></div>
  <div
    class="difficulty-tile"
    style="background-color: {retrieveColor(1)}"
  ></div>
  <div
    class="difficulty-tile"
    style="background-color: {retrieveColor(2)}"
  ></div>
  <div
    class="difficulty-tile"
    style="background-color: {retrieveColor(3)}"
  ></div>
  <div
    class="difficulty-tile"
    style="background-color: {retrieveColor(4)}"
  ></div>
  <p
    class="flavor-text"
    style="color:{difficulties[level - 1]}"
  >
    {flavorText}
  </p>
</div>

<style>
  .difficulty-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .difficulty-tile {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .flavor-text {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
  }
</style>
