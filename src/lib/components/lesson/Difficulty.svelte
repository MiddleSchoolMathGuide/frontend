<script lang="ts">
  export let level: number = 0;

  /* Colors correspond to level */
  const difficulties: string[] = [
    "#4c9440",
    "#c0c243",
    "#d07000",
    "#d03e00",
    "#e40c0c",
  ];

  const retrieveColor = (index: number): string => {
    return index < level ? difficulties[level - 1] : "#D9D9D9";
  };

  const levelToText = (level: number): string => {
    /* Based on the greatest game ever, Skyrim: The Elder Scroll V */
    switch (level) {
      case 0:
        return "None";
      case 1:
        return "Novice";
      case 2:
        return "Apprentice";
      case 3:
        return "Adept";
      case 4:
        return "Expert";
      case 5:
        return "Master";
      default:
        return "Error";
    }
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
  <p class="flavor-text" style="color:{difficulties[level - 1]}">
    {levelToText(level)}
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
