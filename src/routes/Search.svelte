<script lang="ts">
  import { onMount } from "svelte";

  let currentInput: string = "";

  //Likely replace later with full lessons from ts file
  let lessons: { title: string; link: string, tags: string[] }[] = [];

  let lessonsSearchedFor: { title: string; link: string, tags: string[] }[] = [];
  

  //To be changed if necessary for API
   const fetchLessons = async () => {
    try {
      const response = await fetch('/topics/units/lessons');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      lessons = data;
      updateSearch(); 
    } catch (error) {
      console.error('Failed to fetch lessons:', error);
    }
  };

  const updateSearch = () => {
    const lowerCaseInput = currentInput.trim().toLowerCase();

    if (lowerCaseInput === "") {
      lessonsSearchedFor = [];
    } else {
      lessonsSearchedFor = lessons.filter((lesson) => {
        // Check if the lesson title includes the search input
        const titleMatch = lesson.title.toLowerCase().includes(lowerCaseInput);
        // Check if any of the tags include the search input
        const tagsMatch = lesson.tags.some(tag => tag.toLowerCase().includes(lowerCaseInput));
        return titleMatch || tagsMatch;
      });
    }
  };

  onMount(() => {
    fetchLessons();
  });
</script>

<div class="search-box">
  <div class="search-icon">
    <img src="static/magnifying-glass-solid.svg" alt="search" />
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

  .lesson-result {
    max-height: 139px;
    overflow-y: auto;
  }
</style>
