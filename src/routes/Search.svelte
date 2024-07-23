<script lang="ts">
  let currentInput: string = "";

  //Likely replace later with full lessons from ts file
  const lessons: { title: string; link: string }[] = [
    { title: "One Variable Linear Equations", link: "/linear-equations" },
    { title: "Pythagorean Theorem", link: "/pytheorem" },
  ];

  let lessonsSearchedFor: { title: string; link: string }[] = [];

  const updateSearch = () => {
    if (currentInput.trim() === "") {
      lessonsSearchedFor = [];
    } else {
      lessonsSearchedFor = lessons.filter((lesson) =>
        lesson.title.toLowerCase().includes(currentInput.toLowerCase())
      );
    }
  };
</script>

<div class="search-box">
  <div class="search-icon">
    <img src="magnifying-glass-solid.svg" alt="search" />
  </div>
  <input
    type="text"
    placeholder="Search..."
    bind:value={currentInput}
    on:input={updateSearch}
  />
</div>

<div class="results">
  <div class="lesson-result">
    {#each lessonsSearchedFor as { title, link }}
      <p class="lesson"><a class="lesson-clickable" href={link}>{title}</a></p>
    {/each}
  </div>
</div>

<style>
  .search-box {
    display: flex;
    align-items: center;
    max-width: 300px;
    margin-bottom: 20px;
  }

  .search-icon {
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .search-icon img {
    width: 16px;
    height: 16px;
  }

  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 14px;
  }

  .results {
    margin-top: 10px;
  }

  .lesson {
    margin: 5px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .lesson-clickable {
    color: black;
    text-decoration: none;
  }
</style>
